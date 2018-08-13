const pathsModule = require('../config/paths');

class ProxyTarget {
  constructor(host, port, defaultHost, paths = pathsModule){
    this.host = host;
    this.port = port;
    this.defaultHost = defaultHost;
    this.defaultPort = 80;
    this.paths = paths;
  }

  generate() {
    let proxyTargets = {};

    // Augustus handles paths defined in config/paths.js
    this.paths.forEach(path => proxyTargets[path] = this._hostAndPort(this.host, this.port));

    // All other requests are proxied to this host
    proxyTargets.default = this._hostAndPort(this.defaultHost, this.defaultPort);

    return proxyTargets;
  }

  _hostAndPort(host, port) {
    return {
      host: host,
      port: port
    };
  }
}

module.exports = ProxyTarget;
