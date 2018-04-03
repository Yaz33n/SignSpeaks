const table = require("./lookupTable.json");
const _ = require('lodash');

const getLetter = (totalAcc, fingerData) => {

  return new Promise((resolve, reject) => {

    let result = _.filter(table, (obj) => {
      return (fingerData[0] >= obj['fin1'][0] && fingerData[0] <= obj['fin1'][1]) &&
        (fingerData[1] >= obj['fin2'][0] && fingerData[1] <= obj['fin2'][1]) &&
        (fingerData[2] >= obj['fin3'][0] && fingerData[2] <= obj['fin3'][1]) &&
        (fingerData[3] >= obj['fin4'][0] && fingerData[3] <= obj['fin4'][1]) &&
        (fingerData[4] >= obj['fin5'][0] && fingerData[4] <= obj['fin5'][1]);
    });

    if (result.length > 0) {
      const matched = result[0];
      resolve(totalAcc >= matched['totalAcc'] ? matched['words'][0] : matched['words'][1]);
    } else {
      reject("No Words Found!");
    }

  });
}

module.exports = {
  getLetter
}