describe("App Content", function () {
  it("should check element", function () {
    browser.url("https://www.treatwell.co.uk/treatment/spray-tanning-and-sunless-tanning/");

    (browser as any).checkElement($('[class*=app--content--]'), 'App Content');
  });
});
