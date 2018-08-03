const fs = require('fs');
const callsites = require('callsites');
/**
* This function takes in the path of the test file, the extension of the file type and the fixture location.
* It then replaces either the helper part of the file path with fixtures/extension and fixture location.
*/
function fixturePath(path, extension, fixtureLocation) {
  var split_path = path.split('/');
  split_path.splice(-1, 1);
    var index = split_path.indexOf('helpers');
    split_path[index] = 'fixtures/' + extension + '/' + fixtureLocation;
  return split_path.join('/');
}
/**
* This function takes the file path from the test file the extension of the desired file type and the fixture location, and then passes it into the htmlFixturePath method along with the file name parameter and an html extention.
* It returns the path to the fixture file which can then be used in the expects statement of the test.
*/
module.exports = {
  getFixture: function(file_name, extension, fixtureLocation){
    var file_path = fixturePath(callsites()[1].getFileName(), extension, fixtureLocation) + '/' + file_name + '.' + extension;
    if (extension == 'json') {
      return JSON.parse(fs.readFileSync(file_path, 'utf8'));
    } else {
      return fs.readFileSync(file_path, 'utf8');
    }
  }
}
