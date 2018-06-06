const walkSync = require('walk-sync');
/**
* This module is passed into the before block in each test file to allow the shunter helper to establish the paths which will be needed to run the test.
*/
module.exports = walkSync(__dirname + '/../../view', { directories: false }).map(function(path) {
    return '../../../view/' + path;
});
