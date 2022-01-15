const { jwtSign } = require("../authentication/jwtAuth")

exports.getToken = async (req, res) => {
    try {
        const user = { username: "Hashim", password: "1234" }
        const token = await jwtSign(user)
        return res.status(200).json({
            data: { token },
            status: 200,
            message: token ? "Token fetched successfully" : "Something went wrong",
        })
    } catch (err) {
        return res.status(400).json({
            status: 400,
            message: err.message
        })
    }
}