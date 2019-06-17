"use strict";

/**
 * Adds commas to a number
 * @param {number} number
 * @return {number}
 */
module.exports = function(number) {
  return number ? (parseInt(number) / 16).toFixed(2) + "rem" : 0;
};
