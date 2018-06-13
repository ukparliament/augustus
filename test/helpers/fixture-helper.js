const fs = require('fs');
const callsites = require('callsites');

function jsonFixturePath(path) {
    var split_path = path.split('/');
    split_path.splice(-1, 1);
    if (split_path.indexOf('intergration') > -1) {
      var index = split_path.indexOf('intergration');
        split_path[index] = 'fixtures/json';
    } else {
      var index = split_path.indexOf('unit');
      if (index !== -1) {
        split_path[index] = 'fixtures/json';
      }
    }
    return split_path.join('/');
}

function htmlFixturePath(path) {
    var split_path = path.split('/');
    split_path.splice(-1, 1);
    if (split_path.indexOf('intergration') > -1) {
      var index = split_path.indexOf('intergration');
      split_path[index] = 'fixtures/html';
    } else {
      var index = split_path.indexOf('unit');
      if (index !== -1) {
        split_path[index] = 'fixtures/html';
      }
    }
    return split_path.join('/');
}

module.exports = {
    getJSONFixture: function(file_name) {
        var file_path = jsonFixturePath(callsites()[1].getFileName()) + '/' + file_name + '.json';
        return JSON.parse(fs.readFileSync(file_path, 'utf8'));
    },

    getHTMLFixture: function(file_name) {
        var file_path = htmlFixturePath(callsites()[1].getFileName()) + '/' + file_name + '.html';
        return fs.readFileSync(file_path, 'utf8');
    }
}
