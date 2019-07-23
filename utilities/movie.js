const utility = require('../utilities');

/**
 * Sorts movies by release date
 *
 * @param movieData
 * @returns {Promise<promise>}
 */
exports.sortMovieByReleaseDate = async function (movieData) {

    try {
        return await movieData.sort(utility.compareValues('release_date'));
    }catch (e) {
        Promise.reject(e);
    }

};


