const ProxyTarget = require('../../lib/proxy-target');
const expect = require('chai').expect;

describe('ProxyTarget', () => {
  let paths = ['some_path', 'another_path'];

  let expected = {
    'some_path': {
      host: 'host',
      port: 1234
    },
    'another_path': {
      host: 'host',
      port: 1234
    },
    default: {
      host: 'defaultHost',
      port: 80
    }
  }

  it('generates the proxy target correctly', () => {
    expect(new ProxyTarget('host', 1234, 'defaultHost', paths).generate()).to.deep.equal(expected);
  });
});
