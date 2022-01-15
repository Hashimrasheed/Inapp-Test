let bookRoutes = require("./api/routes/book")
let userRoutes = require("./api/routes/user")

module.exports = async (app) => {

    //api
    app.use("/book", bookRoutes);
    app.use("/get-token", userRoutes);
    
    
    app.use((req, res, next) => {
      res.status(404).json({
        error: {
          status: 404,
          message: "Not found",
        },
      });
    });

  }