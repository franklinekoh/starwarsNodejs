const db = require('../database/models');

/**
 * Saves Individual comments
 *
 * @param comment
 * @returns {Promise<Promise<never>|undefined>}
 */
exports.save = async function (comment){

        try {

            await db.Comments.create(comment);

        }catch (e) {
            return  Promise.reject(e);
        }

    };

/**
 *Gets comments by movieId
 *
 * @param movieId
 * @returns {Promise<Promise<{rows: M[]; count: number}|Promise<never>|undefined>|{rows: Model<any, any>[]; count: number}>}
 */
exports.getCommentById = async function (movieId) {

    try {
        const data = await db.Comments.findAndCountAll({
            where: {
                movie_id: movieId
            },
            order: [
                ['createdAt', 'DESC']
            ]
        });

        return data;
    }catch (e) {
        console.log(e);
        return Promise.reject(e)
    }
};
