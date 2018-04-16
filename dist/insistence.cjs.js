/*!
 * insistence v0.2.0
 * (c) 2018-present Vitor Luiz Cavalcanti <vitorluizc@outlook.com> (https://vitorluizc.github.io)
 * Released under the MIT License.
 */
'use strict';

/**
 * Returns a Promise which is resolved after delay.
 * @param time Delay time in milliseconds.
 */
function delay(time) {
  return new Promise(function (resolve) { return setTimeout(resolve, time); });
}
/**
 * Returns check result or `false` if an error is thrown.
 * @param λ A function that checks if it don't need to keep insisting.
 */


function getSuccess(λ) {
  try {
    return λ();
  } catch (_) {
    return false;
  }
}
/**
 * Insistently runs a callback and only resolves the promise when its result is truthy.
 * @param λ A function that checks if it don't need to keep insisting.
 * @param time Time in millisencons to insist again.
 */


function Insistence(λ, time) {
  if ( time === void 0 ) time = 200;

  return new Promise(function (resolve) {
    var insist = function () {
      var success = getSuccess(λ);
      return Promise.resolve(success).then(function (success) {
        if (!success) { throw new Error('Success not achieved. Keep insisting.'); }
        resolve();
      }).catch(function () { return delay(time).then(insist); });
    };

    return insist();
  });
}

module.exports = Insistence;
