'use strict';

const i18next = require('i18next');

i18next.init(require('../config').i18next);

module.exports = initHelper;
module.exports.createTHelper = createTHelper;

// This helper allows dust to work with the i18next internationalization package.
// It passes in parameters which are accessable through the params object, the dust helper then takes in those parameters as its own.
function createTHelper(dustObject) {
  return function (chunk, ctx, bodies, params) {
    let key = dustObject.helpers.tap(params.key, chunk, ctx);

    let data = dustObject.helpers.tap(params.data, chunk, ctx);
    data = data ? data : {};

    return chunk.write(i18next.t(key, data));
  };
}

// This function is exported and loaded by Shunter to be used as a helper in dust.
// It is in a format that Shunter expects, however the last parameter is added so that we can test it.
function initHelper(dust, paramTwo, paramThree, tHelper = createTHelper) {
  dust.helpers.t = tHelper(dust);
}
