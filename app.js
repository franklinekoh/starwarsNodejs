 function loadApp() {
   let express = require('express'),
       app = express(),
       bodyParser = require('body-parser'),
       helmet = require('helmet'),
       movieRoute = require('./routes/movies'),
       commentRoute = require('./routes/comments'),
       swaggerUi = require('swagger-ui-express'),
       swaggerDocument = require('./doc/swagger'),
       characterRoute = require('./routes/characters');
     require('dotenv').config();

   /**
   *Use helmet to secure header
    */
    app.use(helmet());
     /**
      * JSON and urlencoded body parser
      */
     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({extended: false}));

     /**
      * Cross site origin access
      */
     app.use(function (req, res, next) {
         res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
         res.header("Access-Control-Allow-Origin", "*");
         res.header(
             "Access-Control-Allow-Headers",
             "Origin, X-Requested-With, Content-Type, Accept"
         );
         next();
     });

     app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
     app.use('/movies', movieRoute);
     app.use('/comments', commentRoute);
     app.use('/characters', characterRoute);

   return {'app': app, 'bodyParser': bodyParser};
}

module.exports = loadApp();