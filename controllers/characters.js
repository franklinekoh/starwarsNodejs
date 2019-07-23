const characterService = require('../services/characters'),
        characterUtilities = require('../utilities/character');

/**
 * Lists characters for movies
 *
 * @param req
 * @param res
 * @returns {Promise<*|Json|Promise<any>>}
 */
exports.listCharacters = async (req, res) => {

    let characters = await characterService.fetchCharactersInMovie(req.params.movieId);

    if ('sortBy' in req.query) {

        if (req.query.sortBy !== 'name' && req.query.sortBy !== 'gender' && req.query.sortBy !== 'height') {

            return res.status(400).json({
                'status': false,
                'message': 'sortBy Parameter must be name or gender or height'
            });

        }
        
        if ('order' in req.query){

            if (req.query.order !== 'asc' && req.query.order !== 'desc') {
                return res.status(400).json({
                    'status': false,
                    'message': 'order parameter must be asc or desc'
                });
            }
        }

        characters = await characterUtilities.sortCharacters(characters, req.query.sortBy, req.query.order);
    }

    if ('gender' in req.query){
        
        if (req.query.gender !== 'male' && req.query.gender !== 'female'){
           return  res.status(400).json({
                'status': false,
                'message': 'Gender parameter must be male or female'
            });
        }

        characters = await characterUtilities.filterCharacterByGender(characters, req.query.gender);
    }

     characters = await characterUtilities.getTotalHeightAndCharacterCount(characters);

    return res.json({
        'status': true,
        'message': 'characters retrieved',
        'data': characters
    });

};
