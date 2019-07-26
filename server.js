const loadApp = require('./app');

 function startServer() {
    const app = loadApp.app;

    let port = process.env.PORT || 5000;
    app.listen(port, ()=>{
        console.log(`Server listening on port: ${port}`);
    });
}

startServer();
