import { expect } from 'chai';

describe("Storage", function () {
  it("should clear localStorage", function () {
    browser.url("http://www.google.com");
    expect(browser.getTitle()).to.be.equal("Google");

    browser.clearLocalStorage();
  });

  it("should clear sessionStorage", function () {
    browser.url("http://www.google.com");
    expect(browser.getTitle()).to.be.equal("Google");

    browser.clearSessionStorage();
  });
});
