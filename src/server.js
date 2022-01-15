const http = require("http");
const express = require('express');
const { PORT } = require('./config');
const { databaseConnection } = require('./database');
const expressApp = require('./app');
const appMiddlewares = require('./middlewares/app-middlewares');

const StartServer = async () => {

    const app = express();

    await databaseConnection();

    await appMiddlewares(app);

    await expressApp(app);

    const server = http.createServer(app)

    server.listen(PORT, () => {
        console.log(`listening to port ${PORT}`);
    })
        .on('error', (err) => {
            console.log(`error ${err}`);
            process.exit();
        })
}

StartServer()