const loadApp = require('./app');

 function startServer() {
    const app = loadApp.app;

    app.listen(process.env.APP_PORT, ()=>{
        console.log(`Server listening on port: ${process.env.APP_PORT}`)
    });
}

startServer();

