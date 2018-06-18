const fs = require('fs');
const callsites = require('callsites');
/**
* This funcation takes in the path of the test file.
* It then replaces either the intergration or unit part of the file path with fixtures/json.
*/
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
/**
* This funcation takes in the path of the test file.
* It then replaces either the intergration or unit part of the file path with fixtures/html.
*/
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
/**
* This function takes the file path from the test file and passes it into the jsonFixturePath method along with the file name parameter and a json suffix.
* It returns the path to the fixture file which can then be used in the assert statement of the test.
*/
module.exports = {
    getJSONFixture: function(file_name) {
        var file_path = jsonFixturePath(callsites()[1].getFileName()) + '/' + file_name + '.json';
        return JSON.parse(fs.readFileSync(file_path, 'utf8'));
    },
/**
* This function takes the file path from the test file and passes it into the htmlFixturePath method along with the file name parameter and an html suffix.
* It returns the path to the fixture file which can then be used in the assert statement of the test.
*/
    getHTMLFixture: function(file_name) {
        var file_path = htmlFixturePath(callsites()[1].getFileName()) + '/' + file_name + '.html';
        return fs.readFileSync(file_path, 'utf8');
    }
}
