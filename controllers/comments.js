const commentRepository = require('../repositories/comments'),
    movieService = require('../services/movies'),
    joi = require('@hapi/joi');

/**
 *
 * Save Comment for a movie
 * @param req
 * @param res
 * @returns {Promise<*|Json|Promise<any>>}
 */
    exports.save = async function (req, res){

        const schema = {
            comment: joi.string().max(500).required(),
            movieId: joi.number().required()
        };

       const result = joi.validate(req.body, schema);

       if(result.error != null){

           return  res.status(400).json({
               status: false,
               message: result.error.details,
               data: null
           });
       }

       let movieData = await movieService.fetchMovies();
        let check = false;

        for (let i = 0; i < movieData.results.length; i++){
            if (movieData.results[i].episode_id === req.body.movieId) {
                check = true;
                break;
            }
        }

        if (check !== true){
           return  res.status(400).json({
                status: false,
                message: 'Movie ID is invalid',
                data: null
            });

        }

         let data = {
             movie_id: req.body.movieId,
             comment: req.body.comment,
             ip_address: req.header('x-forwarded-for') || req.connection.remoteAddress
         };

        commentRepository.save(data);

      return  res.json({
            status: true,
            message: 'comment created successfully',
            data: null
        });
    };

/**
 * Gets Comments by movie ID
 * @param req
 * @param res
 * @returns {Promise<*|Json|Promise<any>>}
 */
exports.getCommentByMovieId = async function (req, res){

       let data = await commentRepository.getCommentById(req.params.movieId);

        return  res.json({
            status: true,
            message: 'comments retried successfully',
            data: data.rows
        });
    };

