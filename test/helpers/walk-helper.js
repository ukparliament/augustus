const walkSync = require('walk-sync');
const moduleName = require('../../config').moduleName
/**
* This module is passed into the before block in each test file to allow the shunter helper to establish the paths which will be needed to run the test.
*/

projectViews = walkSync(__dirname + '/../../view/', { directories: false }).map(function(path) {
    return '../../../view/' + path;
});

moduleViews = walkSync(__dirname + `/../../node_modules/${moduleName}/view/`, { directories: false }).map(function(path) {
    return `../../../node_modules/${moduleName}/view/` + path;
});

module.exports = projectViews.concat(moduleViews);
