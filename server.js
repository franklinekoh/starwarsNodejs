const loadApp = require('./app');

 function startServer() {
    const app = loadApp.app;

    let port = process.env.DOCKER_PORT || process.env.APP_PORT;
    app.listen(3000, ()=>{
        console.log(`Server listening on port: ${port}`);
    });
}

startServer();

