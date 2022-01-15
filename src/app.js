let bookRoutes = require("./api/routes/book")
let userRoutes = require("./api/routes/user")

module.exports = async (app) => {

    //api
    app.use("/book", bookRoutes);
    app.use("/get-token", userRoutes);
    
    app.use((req, res, next) => {
      const error = new Error("Not found");
      error.status = 404;
      next(error);
    });
  
    app.use((error, req, res, next) => {
      res.status(error.status || 500);
      res.json({
        error: {
          status: error.status,
          message: error.message,
        },
      });
    });
  }