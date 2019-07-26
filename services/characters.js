const movieService = require('../services/movies'),
    axios = require('axios');

/**
 * Fetch characters in a movie
 * @param movieId
 * @returns {Promise<any[]>}
 */
exports.fetchCharactersInMovie = async function (movieId) {

    try {

        const movieData = await movieService.fetchMovieById(movieId);
        let movieCharacters = await Promise.all( movieData.characters.map(async (url) => {
                return this.fetchCharacterByUrl(url);
        }));

        return movieCharacters;

    }catch (e) {
        Promise.reject(e);
    }
};

/**
 * all movie characters
 * @param url
 * @returns {Promise<Promise<*|Promise<never>|undefined>|T>}
 */
exports.fetchCharacterByUrl = async (url) => {

    try {
        const characterData = await axios.get(url);
        return characterData.data;
    }catch (e) {
        return Promise.reject(e);
    }
};