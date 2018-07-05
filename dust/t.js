'use strict';

const i18n = require('i18n');

i18n.configure(require('../config/i18n'));

module.exports = initHelper;
/**
* This helper allows dust to work with the i18n internationalization package.
* It passes in parameters which are accessable through the params object, the dust helper then takes in those parameters as its own.
*/
function initHelper(dust, renderer, config) {
	dust.helpers.t = function (chunk, ctx, bodies, params) {
		let key = dust.helpers.tap(params.key, chunk, ctx)

		let data = dust.helpers.tap(params.data, chunk, ctx)
		data = data ? data : {};

		return chunk.write(i18n.__(key, data))
	};
}
