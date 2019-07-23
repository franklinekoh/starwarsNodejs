const movieController = require('../controllers/movies');
/**
 *Register all movies routes
 */

let express = require('express');
let router = express.Router();

/**
 * Get all movies
 */
router.get('/', movieController.getMovies);

module.exports = router;
