const movieService = require('../services/movies'),
    movieUtilities = require('../utilities/movie'),
    commentRepository = require('../repositories/comments');

/**
 * returns the list of all starwars movies
 *
 * @param req
 * @param res
 * @returns {Promise<*|Json|Promise<any>>}
 */
    async function getMovies(req, res) {

        let data = await movieService.fetchMovies();
        let response = await movieUtilities.sortMovieByReleaseDate(data.results);

        let movieDataArray = [];
        for (let i = 0; i < response.length; i++){
            let movieDatumArray = {};
             let comments = await commentRepository.getCommentById(response[i].episode_id);

             movieDatumArray.title = response[i].title;
             movieDatumArray.opening_crawl = response[i].opening_crawl;
             movieDatumArray.release_date = response[i].release_date;
             movieDatumArray.comment_count = comments.count;
             movieDataArray.push(movieDatumArray);
        }

         return  res.json({
            'status': true,
            'message': 'movies retrieved',
            'data': movieDataArray
        });
    };


exports.getMovies = getMovies;