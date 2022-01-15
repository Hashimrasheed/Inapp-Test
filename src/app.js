

module.exports = async (app) => {

    //api
    // youmaylike(app)
    app.use((req, res, next) => {
    console.log(req.isAuth)

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