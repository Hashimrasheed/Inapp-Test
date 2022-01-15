const jwt = require('jsonwebtoken');
const { JWT_KEY } = require("../../config/index")

exports.jwtSign = async (payload) => {
    try {
        const strToken = await jwt.sign(payload, JWT_KEY);
        return strToken;
    } catch (error) {
        new Error(error)
    }
}

exports.isAuth = async (req, res, next) => {
    try {
        if (!req.isAuth) {
            return res.status(401).json({
                status: 401,
                message: "Token required"
            })
        }
        next()
    } catch (error) {
        return res.status(401).json({
            status: 401,
            message: "Token required",
            error: error.message
        })
    }
}