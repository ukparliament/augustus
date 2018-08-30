const fs = require('fs');
const callsites = require('callsites');
/**
* This function takes in the path of the test file, the extension of the file type and the fixture location.
* It then replaces either the helper part of the file path with fixtures/extension and fixture location.
*/
function fixturePath(path, extension, integrationTest) {
  let split_path = path.split('/');
  split_path.splice(-1, 1);

  // Are we looking for fixtures in the PROJECT_ROOT/test/fixtures, or PROJECT_ROOT/data folders.
  let folderMarker = integrationTest ? 'test' : 'helpers';
  let fixtureFolder = integrationTest ? 'data' : 'fixtures';

  let index = split_path.indexOf(folderMarker);

  let new_path = split_path.slice(0, index);
  new_path.push(fixtureFolder);

  if(!integrationTest) {
    new_path.push(extension);
  }

  return new_path.join('/');
}

/**
* This function takes the file path from the test file the extension of the desired file type and the fixture location, and then passes it into the htmlFixturePath method along with the file name parameter and an html extention.
* It returns the path to the fixture file which can then be used in the expects statement of the test.
*
* @param fileName [string] The fixture file name i.e. '404.json' would have filename '404'
* @param extension [string] The fixture extension we are looking for i.e. '404.json' would have extension 'json'
* @param fixtureLocation [string|null] The directory within our fixtures folder to look for our file i.e. 'test/fixtures/integration/html/error-pages/4xx/404.html' would have the fixtureLocation 'error-pages/4xx'
* @param integrationTest [boolean] Are we getting an integration test fixture. Used specifically to get JSON fixtures from the root data directory.
*
* @return [string] the fixture file we will be using
*/
module.exports = {
  getFixture: function(fileName, extension, fixtureLocation, integrationTest){
    // What directory are we looking in?
    let filePath = fixturePath(callsites()[1].getFileName(), extension, integrationTest);

    // Build our file path
    if(fixtureLocation){
      filePath += `/${fixtureLocation}`;
    }
    filePath += `/${fileName}.${extension}`;

    // Read the file
    let fixture = fs.readFileSync(filePath, 'utf8');
    if (extension === 'json') {
      fixture = JSON.parse(fixture);
    }

    return fixture;
  }
};
