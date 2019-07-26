const loadApp = require('./app');

 function startServer() {
    const app = loadApp.app;

    let port = process.env.DOCKER_PORT || process.env.APP_PORT || 7000;
    app.listen(port, ()=>{
        console.log(`Server listening on port: ${port}`);
    });
}

startServer();
 