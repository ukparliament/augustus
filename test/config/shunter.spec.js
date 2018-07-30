const expect = require('chai').expect;
const shunterConfig = require('../../config/shunter');
const winston = require('../../middlewares').winston;

describe('shunter config', () => {
  it('sets logger_library to null if log_to_json is not a true string', () => {
    let object = shunterConfig('some_dir', 'false', 'logger_library');

    expect(object.path.themes).to.eq('some_dir');
    expect(object.log).to.eq(null);
  })

  it('sets logger_library if log_to_json is a true string', () => {
    let object = shunterConfig('some_dir', 'true', 'logger_library');

    expect(object.path.themes).to.eq('some_dir');
    expect(object.log).to.eq('logger_library');
  })

  it('blahh', () => {
    let object = shunterConfig('some_dir', 'true');

    expect(object.path.themes).to.eq('some_dir');
    expect(object.log).to.eq(winston);
  })
})
