const CharacterController = require('../controllers/characters');
/**
 *Register all characters routes
 */

let express = require('express');
let router = express.Router();

/**
 * List character for a movie
 */
router.get('/:movieId', CharacterController.listCharacters);

module.exports = router;