const CommentController = require('../controllers/comments');
/**
 *Register all comments routes
 */

let express = require('express');
let router = express.Router();

/**
 * Save comment to database
 */
router.post('/', CommentController.save);

/**
 * Get comment for a movie
 */
router.get('/:movieId', CommentController.getCommentByMovieId);

module.exports = router;