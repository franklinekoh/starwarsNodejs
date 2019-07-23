const axios = require('axios');

/**
 * fetches all movies
 *
 * @returns {Promise<Promise<*|Promise<never>|undefined>|T>}
 */
   exports.fetchMovies = async function () {

        try {
         const response = await axios.get(`${process.env.SWAPI_URL}/films`);
         return response.data;

        } catch (e) {
           return  Promise.reject(e);
        }

    };

/**
 * Fetches movie by movie ID
 *
 * @param movieId
 * @returns {Promise<Promise<*|Promise<never>|undefined>|T>}
 */
exports.fetchMovieById = async (movieId) => {

       try {
            const response = await axios.get(`${process.env.SWAPI_URL}/films/${movieId}`);
            return response.data;

       }catch (e) {
           return Promise.reject(e);
       }
   };
