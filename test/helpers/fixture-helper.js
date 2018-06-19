const fs = require('fs');
const callsites = require('callsites');
/**
* This funcation takes in the path of the test file and the suffix of the file type.
* It then replaces either the intergration or unit part of the file path with fixtures/suffix.
*/
function fixturePath(path, suffix) {
  var split_path = path.split('/');
  split_path.splice(-1, 1);
  if (split_path.indexOf('intergration') > -1) {
    var index = split_path.indexOf('intergration');
    split_path[index] = 'fixtures/' + suffix;
  } else {
    var index = split_path.indexOf('unit');
    if (index !== -1) {
      split_path[index] = 'fixtures/' + suffix;
    }
  }
  return split_path.join('/');
}
/**
* This function takes the file path from the test file and the suffix of the desired file type, and then passes it into the htmlFixturePath method along with the file name parameter and an html suffix.
* It returns the path to the fixture file which can then be used in the assert statement of the test.
*/
module.exports = {
  getFixture: function(file_name, suffix){
    var file_path = fixturePath(callsites()[1].getFileName(), suffix) + '/' + file_name + '.' + suffix;
    if (suffix == 'json') {
      return JSON.parse(fs.readFileSync(file_path, 'utf8'));
    } else {
      return fs.readFileSync(file_path, 'utf8');
    }
  }
}
