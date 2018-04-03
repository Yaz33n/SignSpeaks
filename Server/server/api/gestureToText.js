/**
 * Importing the library and the table of words and 
 * letters for the conversion API.
 */
const table = require("./lookupTable.json");
const _ = require('lodash');

/**
 * This method should find a letter or a word
 * by given contraints in the lookup table. It 
 * should find a valid letter or a word to a
 * particular gesture. If not found It returns no 
 * words found error.
 * 
 * @param {Number} totalAcc Accelerometer Value
 * @param {Array} fingerData Finger bend Values
 */
const getLetter = (totalAcc, fingerData) => {

  // Returns a new promise
  return new Promise((resolve, reject) => {

    // Get all the objects that matches the below condition
    let result = _.filter(table, (obj /*Callback for each*/) => {
      // Checking all the constraints.
      return (fingerData[0] >= obj['fin1'][0] && fingerData[0] <= obj['fin1'][1]) &&
        (fingerData[1] >= obj['fin2'][0] && fingerData[1] <= obj['fin2'][1]) &&
        (fingerData[2] >= obj['fin3'][0] && fingerData[2] <= obj['fin3'][1]) &&
        (fingerData[3] >= obj['fin4'][0] && fingerData[3] <= obj['fin4'][1]) &&
        (fingerData[4] >= obj['fin5'][0] && fingerData[4] <= obj['fin5'][1]);
    });

    if (result.length > 0) {
      const matched = result[0]; // Fetching the first object that matched.
      resolve(totalAcc >= matched['totalAcc'] ? matched['words'][0] : matched['words'][1]);
    } else {
      reject("No Words Found!");
    }

  });
}

// Exporting the module for outside use.
module.exports = {
  getLetter 
}