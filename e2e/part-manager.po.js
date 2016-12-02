var PartManagerPage = function() {

  this.get = function() {
    browser.get('http://localhost:4200');
  };

  this.totalCountLabel = element(by.id('totalCountLabel'));

  this.totalCountLabelShouldHaveText = function(value) {
    expect(this.totalCountLabel.getText()).toBe(value);
  };

  this.addButton = element(by.buttonText('Add'));

  this.clickAddButton = function() {
    this.addButton.click();
  };

  this.parts = element.all(by.css('#parts-table > tbody > tr.part-row'));

  this.partsCountShouldBe = function(count) {
    expect(this.parts.count()).toBe(count);
  };

  this.partIdShouldHaveText = function(rowIndex1, value) {
    expect(this.parts.get(rowIndex1).element(by.css('td.vert-align.text-center:nth-of-type(1)')).getText()).toBe(value);
  };

  this.partPartNameShouldHaveText = function(rowIndex1, value) {
    expect(this.parts.get(rowIndex1).element(by.css('td.vert-align:nth-of-type(2)')).getText()).toBe(value);
  };

  this.partVwOemNumberShouldHaveText = function(rowIndex1, value) {
    expect(this.parts.get(rowIndex1).element(by.css('td.vert-align.text-center:nth-of-type(3)')).getText()).toBe(value);
  };

  this.partWebshopNameShouldHaveText = function(rowIndex1, value) {
    expect(this.parts.get(rowIndex1).element(by.css('td.vert-align:nth-of-type(4)')).getText()).toBe(value);
  };

  this.partHaveItYesNoShouldHaveText = function(rowIndex1, value) {
    expect(this.parts.get(rowIndex1).element(by.css('td.vert-align.text-center:nth-of-type(5)')).getText()).toBe(value);
  };

  this.partPurchaseDateShouldHaveText = function(rowIndex1, value) {
    expect(this.parts.get(rowIndex1).element(by.css('td.vert-align.text-center:nth-of-type(6)')).getText()).toBe(value);
  };

  this.partPriceShouldHaveText = function(rowIndex1, value) {
    expect(this.parts.get(rowIndex1).element(by.css('td.vert-align.text-center:nth-of-type(7)')).getText()).toBe(value);
  };

  this.clickEditPartButton = function(rowIndex1) {
    this.parts.get(rowIndex1).element(by.css('td.text-center:nth-of-type(8) > button.btn.btn-default.btn-sm:nth-of-type(1)')).click();
  };

  this.clickDeletePartButton = function(rowIndex1) {
    this.parts.get(rowIndex1).element(by.css('td.text-center:nth-of-type(8) > button.btn.btn-default.btn-sm:nth-of-type(2)')).click();
  };

  this.previousPageLink = element(by.linkText('«'));

  this.clickPreviousPageLink = function() {
    this.previousPageLink.click();
  };

  this.pages = element.all(by.css('div.row > div.col-md-12 > nav > ul.pagination > li.page-link'));

  this.pagesCountShouldBe = function(count) {
    expect(this.pages.count()).toBe(count);
  };

  this.clickPageLink = function(rowIndex1) {
    this.pages.get(rowIndex1).element(by.css('a')).click();
  };

  this.pageLinkShouldBeVisible = function(rowIndex1) {
    expect(this.pages.get(rowIndex1).element(by.css('a')).isDisplayed()).toBeTruthy();
  };

  this.pageLinkShouldNotBeVisible = function(rowIndex1) {
    expect(this.pages.get(rowIndex1).element(by.css('a')).isDisplayed()).toBeFalsy();
  };

  this.pageLinkShouldHaveText = function(rowIndex1, value) {
    expect(this.pages.get(rowIndex1).element(by.css('a')).getText()).toBe(value);
  };

  this.nextPageLink = element(by.linkText('»'));

  this.clickNextPageLink = function() {
    this.nextPageLink.click();
  };

};
module.exports = new PartManagerPage();