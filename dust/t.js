'use strict';

var i18n = require('i18n');

i18n.configure(require('../config').i18n);

module.exports = initHelper;

function initHelper(dust, renderer, config) {
	dust.helpers.t = function (chunk, ctx, bodies, params) {
		var key = dust.helpers.tap(params.key, chunk, ctx)

		return chunk.write(i18n.__(key))
	};
}
