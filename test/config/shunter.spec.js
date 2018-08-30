const expect = require('chai').expect;
const routes = require('../../config/routes');
const shunterConfig = require('../../config/shunter');

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
      errorPages: {
        errorLayouts: {
          404: 'layout-error-404',
          500: 'layout-error-500',
          502: 'layout-error-502',
          default: 'layout'
        }
      }
    }

    expect(object).to.deep.equal(expectation);
  })
})
