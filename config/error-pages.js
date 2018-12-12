'use strict';

/* CONTENTS
 */

module.exports = {
  errorPagesConfig,
  handleError,
  getStaticDataPath
};

/* METHODS
 */

function errorPagesConfig(statusCodes) {
  let errorLayouts = {};
  let staticData = {};

  statusCodes.map(function(statusCode) {
    let layoutName = 'layout-error-' + statusCode;

    errorLayouts[statusCode === '404' ? 'default' : statusCode] = layoutName;
    staticData[layoutName] = handleError(statusCode);
  });

  return {
    errorLayouts,
    staticData
  };
}

function handleError(statusCode) {
  switch(statusCode) {
    case '404':
    case '500':
    case '502':
      return require(getStaticDataPath(statusCode));

    default:
      throw new Error("'handleError' does not support the HTTP status code " + statusCode);
  }
}

function getStaticDataPath(statusCode) {
  return '../data/website/error-pages/' + statusCode + '.json';
}
