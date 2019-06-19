"use strict";

/**
 * Convert pixel to rem
 * @param {number} number
 * @return {string}
 */
module.exports = function(number) {
  return number ? (parseInt(number) / 16).toFixed(2) + "rem" : 0;
};
