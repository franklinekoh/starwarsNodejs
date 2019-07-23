const utility = require('../utilities');

/**
 * Sorts movies character based on passed parameters
 *
 * @param characterData
 * @param sortBy
 * @param order
 * @returns {Promise<*|Promise<never>|undefined>}
 */
exports.sortCharacters = async function (characterData, sortBy, order) {

    try {

        return await characterData.sort(utility.compareValues(sortBy, order));

    }catch (e) {
       return Promise.reject(e);
    }
};

/**
 * Filters Movie characters by gender
 *
 * @param characterData
 * @param filterBy
 * @returns {Promise<Promise<*|Promise<never>|undefined>|*>}
 */
exports.filterCharacterByGender = async (characterData, filterBy) => {

    try {
        return await characterData.filter((characterDatum) => {
            return characterDatum.gender === filterBy.toLowerCase();
        });
    }catch (e) {
        return Promise.reject(e);
    }
};

/**
 * Gets total Hieght and character count for movie character
 *
 * @param characterData
 * @returns {Promise<Promise<*|Promise<never>|undefined>|*>}
 */
exports.getTotalHeightAndCharacterCount = async (characterData) => {

    try {
        const totalHeightInCm = characterData.reduce((total, currentData) => {
            return  +currentData.height + total;
        }, 0);

        const characterCount = characterData.length;
        const {feetInt, inches} = utility.centimeterToFeetAndInches(totalHeightInCm);
        const totalHeightInFeetAndInches = `${feetInt}ft and ${inches}inches`;

        const heightMetaData = {'characterCount': characterCount, 'totalHeightInCm': totalHeightInCm, 'totalHeightInFeetAndInches': totalHeightInFeetAndInches};
        characterData.push(heightMetaData);

       return  characterData;
    }catch (e) {
        return Promise.reject(e);
    }
};