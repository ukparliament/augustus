const fs = require('fs');
const data = fs.readFileSync(process.cwd() + '/public/resources/robots.txt');

module.exports = (req, res, next) => {
  res.setHeader('Content-Type', 'text/plain'); // set the appropriate HTTP header
  res.write(data);
  res.end();
};
