const jwt = require('jsonwebtoken')
const {JWT_KEY} = require('../config');
module.exports = async (req, res, next) => {
    const authHeader = req.get('Authorization')
    if(!authHeader){
        req.isAuth= false;
        return next();
    }
    const token = authHeader.split(" ")[1];
    if(!token || token == '' || token=='null'){
        req.isAuth= false;
        return next();
    }
    let decodedToken;
    try{
        decodedToken = await jwt.verify(token, JWT_KEY)
    }catch(err) {
        req.isAuth = false;
        return next();
    }
    if(!decodedToken){
        req.isAuth = false;
        next();
    } 
    req.isAuth = true;
    req.customer = decodedToken.customer;
    next();
}