const Book = require('../../database/models/Book')

exports.addBookValidation = async (req, res, next) => {
    req.body = JSON.parse(JSON.stringify(req.body))
    let messages = {
        bookNumber: "",
        title: "",
        description: "",
        auther: "",
        price: "",
        shelfNumber: "",
        publishedOn: "",
    }
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        return res.status(500).json({
            status_code: 500,
            message: "Request body can't be empty",
            data: {}
        })
    }
    let flag = true;
    if (!req.body.bookNumber) {
        flag = false
        messages.bookNumber = "Book number field is required"
    } else {
        const result = await Book.findOne({ bookNumber: req.body.bookNumber }).exec();
        if (result) {
            flag = false
            messages.bookNumber = "Book number already exists"
        }
    }
    if (!req.body.title) {
        flag = false
        messages.title = "Book name is required"
    } else {
        const result = await Book.findOne({ title: req.body.title }).exec();
        if (result) {
            flag = false
            messages.title = "Book name already exists"
        }
    }
    if (!req.body.description) {
        flag = false
        messages.description = "Book description is required"
    }
    if (!req.body.auther) {
        flag = false
        messages.auther = "Auther name is required"
    }
    if (!req.body.price) {
        flag = false
        messages.price = "Book price is required"
    }
    if (!req.body.shelfNumber) {
        flag = false
        messages.shelfNumber = "shelf number is required"
    }
    if (!req.body.publishedOn) {
        flag = false
        messages.publishedOn = "Publish date is required"
    }
    if (!flag) {
        return res.status(500).json({
            status_code: 500,
            message: "Errors",
            errors: messages,
            data: {}
        })
    }
    next();
}

exports.updateBookValidation = async (req, res, next) => {
    let { bookId } = req.params
    req.body = JSON.parse(JSON.stringify(req.body))
    let messages = {
        bookNumber: "",
        title: "",
        description: "",
        auther: "",
        price: "",
        shelfNumber: "",
        publishedOn: "",
    }
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        return res.status(500).json({
            status_code: 500,
            message: "Request body can't be empty",
            data: {}
        })
    }
    let flag = true;
    if (!req.body.bookNumber) {
        flag = false
        messages.bookNumber = "Book number field is required"
    } else {
        const result = await Book.findOne({ bookNumber: req.body.bookNumber, _id: { $ne: bookId } }).exec();
        if (result) {
            flag = false
            messages.bookNumber = "Book number already exists"
        }
    }
    if (!req.body.title) {
        flag = false
        messages.title = "Book name is required"
    } else {
        const result = await Book.findOne({ title: req.body.title, _id: { $ne: bookId } }).exec();
        if (result) {
            flag = false
            messages.title = "Book name already exists"
        }
    }
    if (!req.body.description) {
        flag = false
        messages.description = "Book description is required"
    }
    if (!req.body.auther) {
        flag = false
        messages.auther = "Auther name is required"
    }
    if (!req.body.price) {
        flag = false
        messages.price = "Book price is required"
    }
    if (!req.body.shelfNumber) {
        flag = false
        messages.shelfNumber = "shelf number is required"
    }
    if (!req.body.publishedOn) {
        flag = false
        messages.publishedOn = "Publish date is required"
    }
    if (!flag) {
        return res.status(500).json({
            status_code: 500,
            message: "Errors",
            errors: messages,
            data: {}
        })
    }
    next();
}