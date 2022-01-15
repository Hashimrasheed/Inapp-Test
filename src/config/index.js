require("dotenv").config();
const {JWT_KEY} = require("./constant")

module.exports = {
    PORT: process.env.PORT,
    DB_URL: process.env.MONGODB_URI,
    JWT_KEY: JWT_KEY,
}
 