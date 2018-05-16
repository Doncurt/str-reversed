'use strict';

/**
 * Reversed a string
 * @param {string} str
 * @return {string}
 */
module.exports = function(str) {
  let reversed = '';
  for(let i = str.length-1; i >= 0 ;i-- ) {
    reversed +=str[i];
  }
    return reversed;
};
