const expect = require('chai').expect;
const routes = require('../../config/routes');
const shunterConfig = require('../../config/shunter');
const { errorPagesConfig } = require('../../config/error-pages');

describe('shunter config', () => {
  it('has the correct config', () => {
    const object = shunterConfig('someDir', 'moduleName');

    const expectation = {
      path: {
        themes: 'someDir'
      },
      routes: routes,
      jsonViewParameter: 'json',
      modules: ['moduleName'],
      errorPages: errorPagesConfig(['404', '500', '502'])
    };

    expect(object).to.deep.equal(expectation);
  })
});
