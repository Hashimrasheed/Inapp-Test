const Book = require('../../database/models/Book')
const mongoose = require("mongoose")

exports.getAllBooks = async (req, res) => {
    try {
        let books = await Book.find({})
            .select("-createdAt -updatedAt -__v")
        return res.status(200).json({
            data: books,
            status: 200,
            message: books[0] ? "Books fetched successfully" : "No books found",
        })
    } catch (err) {
        return res.status(400).json({
            status: 400,
            message: err.message
        })
    }
}

exports.addBook = async (req, res) => {
    try {
        const { bookNumber, title, description, auther, price, shelfNumber, publishedOn } = req.body
        let bookDetails = new Book({
            _id: new mongoose.Types.ObjectId,
            bookNumber,
            title,
            description,
            auther,
            price,
            shelfNumber,
            publishedOn
        })
        let book = await bookDetails.save()
        if (!book) {
            throw new Error("Something went wrong")
        }
        return res.status(200).json({
            data: book,
            status: 200,
            message: "Books added successfully",
        })
    } catch (err) {
        return res.status(400).json({
            status: 400,
            message: err.message
        })
    }
}

exports.editBook = async (req, res) => {
    try {
        const { bookId } = req.params

        let books = await Book.findOneAndUpdate({ _id: bookId }, req.body, { new: true })
            .select("-createdAt -updatedAt -__v")
        if (!books) {
            throw new Error("Something went wrong")
        }
        return res.status(200).json({
            data: books,
            status: 200,
            message: "Books updated successfully",
        })
    } catch (err) {
        return res.status(400).json({
            status: 400,
            message: err.message
        })
    }
}