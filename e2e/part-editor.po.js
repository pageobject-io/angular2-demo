var PartEditorPage = function() {

  this.partName = element(by.id('partName'));

  this.setPartName = function(value) {
    this.partName.clear();
    this.partName.sendKeys(value);
  };

  this.shouldHavePartName = function(value) {
    expect(this.partName.getAttribute('value')).toEqual(value);
  };

  this.vwOemNumber = element(by.id('vwOemNumber'));

  this.setVwOemNumber = function(value) {
    this.vwOemNumber.clear();
    this.vwOemNumber.sendKeys(value);
  };

  this.shouldHaveVwOemNumber = function(value) {
    expect(this.vwOemNumber.getAttribute('value')).toEqual(value);
  };

  this.webshopName = element(by.id('webshopName'));

  this.selectWebshopNameByText = function(text) {
    this.webshopName.all(by.xpath('option[.="' + text + '"]')).click();
  };

  this.webshopNameByTextShouldBeSelected = function() {
    var expectedOptions = [];
    for (var i = 0; i < arguments.length; i++) {
      expectedOptions = expectedOptions.concat(arguments[i]);
    }

    for (i = 0; i < expectedOptions.length; i++) {
      var options = this.webshopName.all(by.xpath('option[.="' + expectedOptions[i] + '"]'));

      options.each(function(option) {
        expect(option.isSelected()).toBeTruthy();
      });

      expect(options.count()).toBeGreaterThan(0);
    }
  };

  this.webshopNameByTextShouldNotBeSelected = function() {
    var expectedOptions = [];
    for (var i = 0; i < arguments.length; i++) {
      expectedOptions = expectedOptions.concat(arguments[i]);
    }

    for (i = 0; i < expectedOptions.length; i++) {
      this.webshopName.all(by.xpath('option[.="' + expectedOptions[i] + '"]')).each(function(option) {
        expect(option.isSelected()).toBeFalsy();
      });
    }
  };

  this.productUrl = element(by.id('productUrl'));

  this.setProductUrl = function(value) {
    this.productUrl.clear();
    this.productUrl.sendKeys(value);
  };

  this.shouldHaveProductUrl = function(value) {
    expect(this.productUrl.getAttribute('value')).toEqual(value);
  };

  this.pictureUrl = element(by.id('pictureUrl'));

  this.setPictureUrl = function(value) {
    this.pictureUrl.clear();
    this.pictureUrl.sendKeys(value);
  };

  this.shouldHavePictureUrl = function(value) {
    expect(this.pictureUrl.getAttribute('value')).toEqual(value);
  };

  this.haveIt = element(by.id('haveIt'));

  this.clickHaveIt = function() {
    this.haveIt.click();
  };

  this.haveItShouldBeSelected = function() {
    expect(this.haveIt.isSelected()).toBeTruthy();
  };

  this.haveItShouldNotBeSelected = function() {
    expect(this.haveIt.isSelected()).toBeFalsy();
  };

  this.purchaseDate = element(by.id('purchaseDate'));

  this.setPurchaseDate = function(value) {
    // https://github.com/angular/protractor/issues/562
    var element = this.purchaseDate;
    element.getAttribute('value').then(function(text) {
      var backspaceSeries = Array(text.length + 1).join(protractor.Key.BACK_SPACE);
      element.sendKeys(backspaceSeries);
      element.sendKeys(value);
    });
  };

  this.shouldHavePurchaseDate = function(value) {
    expect(this.purchaseDate.getAttribute('value')).toEqual(value);
  };

  this.purchaseDateShouldBeVisible = function() {
    expect(this.purchaseDate.isDisplayed()).toBeTruthy();
  };

  this.purchaseDateShouldNotBeVisible = function() {
    expect(this.purchaseDate.isDisplayed()).toBeFalsy();
  };

  this.price = element(by.id('price'));

  this.setPrice = function(value) {
    this.price.clear();
    this.price.sendKeys(value);
  };

  this.shouldHavePrice = function(value) {
    expect(this.price.getAttribute('value')).toEqual(value);
  };

  this.saveButton = element(by.buttonText('Save'));

  this.clickSaveButton = function() {
    this.saveButton.click();
  };

  this.cancelButton = element(by.buttonText('Cancel'));

  this.clickCancelButton = function() {
    this.cancelButton.click();
  };

};
module.exports = new PartEditorPage();