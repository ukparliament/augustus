const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const initHelper = require('../../dust/t');
const createTHelper = require('../../dust/t').createTHelper;

chai.use(sinonChai);

describe('translation helper', () => {
  let dust;

  beforeEach(() => {
    dust = {
      helpers: { tap: (param) => { return param } }
    };
  });

  describe('#initHelper', () => {
    it('sets the t helper correctly', () => {
      let tHelper = () => { return 'tHelper'; };

      initHelper(dust, 'paramTwo', 'paramTwo', tHelper);

      expect(dust.helpers.t).to.eq('tHelper');
    })
  });

  describe('#createTHelper', () => {
    let tHelper, chunk, params;

    before(() => {
      tHelper = createTHelper(dust);

      chunk = { write: (param) => { return param } };

      params = { key: 'shared.header.cookie-banner-text', data: { link: '/some-link' } };
    });

    it('calls the right methods and returns the right translation', () => {
      const expected = 'Parliament.uk uses cookies to make the site simpler. <a href=\'/some-link\'>Find out more about cookies</a>';

      expect(tHelper(chunk, 'ctx', 'bodies', params)).to.eq(expected);
    });
  });
});
