'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/');
    page = require('./main.po');
  });

  it('should show navbar with correct data', function() {
    expect(page.brand.getText()).toBe('MovieFlix');
    expect(page.login.getText()).toBe('Login');
  });

});
