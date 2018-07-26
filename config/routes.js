'use strict';

// Configure the proxy route, this should point to
// where your back end application runs
module.exports = {
  "localhost": {
    "default": {
      "host": "localhost",
      "port": 5401
    }
  },
  "beta.parliament.uk": {
    "default": {
      "host": "localhost",
      "port": 5401
    }
  }
}
