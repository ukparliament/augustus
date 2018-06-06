const walkSync = require('walk-sync');

module.exports = walkSync(__dirname + '/../../view', { directories: false }).map(function(path) {
    return '../../../view/' + path;
});
