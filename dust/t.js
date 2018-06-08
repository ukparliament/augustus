'use strict';

var i18n = require('i18n');

i18n.configure(require('../config').i18n);

module.exports = initHelper;

function initHelper(dust, renderer, config) {
	dust.helpers.t = function (chunk, ctx, bodies, params) {
		var key = dust.helpers.tap(params.key, chunk, ctx)

		var data = dust.helpers.tap(params.data, chunk, ctx)
		data = data ? data : {};

		return chunk.write(i18n.__(key, data))
	};
}
