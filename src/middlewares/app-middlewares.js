const bodyParser = require('body-parser')
var morgan = require("morgan");
var path = require("path");
var rfs = require("rotating-file-stream");
const isAuth = require("./is-auth");

module.exports = async (app) => {

  // writing logs
  var accessLogStream = rfs.createStream("access.log", {
    interval: "1d",
    path: path.join("./src/log"),
  });

  // setup the logger
  app.use(morgan("combined", { stream: accessLogStream }));

  app.use(bodyParser.json());

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "PUT, POST, GET"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Inapp",
      "Hashim-Machine test"
    );
    next();
  });

  app.use(isAuth);

}