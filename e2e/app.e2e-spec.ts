var partManager = require('./part-manager.po.js');
var partEditor = require('./part-editor.po.js');

describe('angular2-demo App', function () {

    beforeEach(function () {
        partManager.get();
    });

    it('should list parts', () => {
        partManager.totalCountLabelShouldHaveText('You have 12 parts on your list.');

        partManager.partsCountShouldBe(10);

        partManager.partIdShouldHaveText(0, '1');
        partManager.partPartNameShouldHaveText(0, 'Porsche alloy wheel');
        partManager.partVwOemNumberShouldHaveText(0, '123-234-456-A');
        partManager.partWebshopNameShouldHaveText(0, 'vwheritage');
        partManager.partHaveItYesNoShouldHaveText(0, 'No');
        partManager.partPurchaseDateShouldHaveText(0, '');
        partManager.partPriceShouldHaveText(0, '36058');

        partManager.pagesCountShouldBe(2);

        partManager.pageLinkShouldBeVisible(0);
        partManager.pageLinkShouldHaveText(0, '1');
        partManager.pageLinkShouldBeVisible(1);
        partManager.pageLinkShouldHaveText(1, '2');
        partManager.clickPreviousPageLink();
        partManager.partsCountShouldBe(10);
        partManager.clickNextPageLink();
        partManager.partsCountShouldBe(2);
        partManager.clickPageLink(0);
        partManager.partsCountShouldBe(10);
        partManager.clickPageLink(1);
        partManager.partsCountShouldBe(2);
    });

    it('should add part', () => {
        partManager.totalCountLabelShouldHaveText('You have 12 parts on your list.');
        
        partManager.clickAddButton();
        
        partEditor.shouldHavePartName('');
        partEditor.shouldHaveVwOemNumber('');
        partEditor.webshopNameByTextShouldNotBeSelected('eBay UK');
        partEditor.webshopNameByTextShouldNotBeSelected('Justkampers');
        partEditor.webshopNameByTextShouldNotBeSelected('vwheritage');
        partEditor.shouldHaveProductUrl('');
        partEditor.shouldHavePictureUrl('');
        partEditor.haveItShouldNotBeSelected();
        partEditor.shouldHavePrice('');

        partEditor.setPartName('My new part');
        partEditor.setVwOemNumber('321-555-222-A');
        partEditor.selectWebshopNameByText('Justkampers');
        partEditor.setProductUrl('http://www.example.com');
        partEditor.setPictureUrl('http://images.thesamba.com/vw/gallery/pix/490560.jpg');
        partEditor.clickHaveIt();
        partEditor.setPurchaseDate('2015-05-06');
        partEditor.setPrice('12345');
        
        partEditor.clickCancelButton();

        partManager.totalCountLabelShouldHaveText('You have 12 parts on your list.');

        partManager.clickAddButton();

        partEditor.shouldHavePartName('');
        partEditor.shouldHaveVwOemNumber('');
        partEditor.webshopNameByTextShouldNotBeSelected('eBay UK');
        partEditor.webshopNameByTextShouldNotBeSelected('Justkampers');
        partEditor.webshopNameByTextShouldNotBeSelected('vwheritage');
        partEditor.shouldHaveProductUrl('');
        partEditor.shouldHavePictureUrl('');
        partEditor.haveItShouldNotBeSelected();
        partEditor.shouldHavePrice('');

        partEditor.setPartName('My new part');
        partEditor.setVwOemNumber('321-555-222-A');
        partEditor.selectWebshopNameByText('Justkampers');
        partEditor.setProductUrl('http://www.example.com');
        partEditor.setPictureUrl('http://images.thesamba.com/vw/gallery/pix/490560.jpg');
        partEditor.clickHaveIt();
        partEditor.setPurchaseDate('06052015');
        partEditor.setPrice('12345');
        
        partEditor.clickSaveButton();
        partManager.totalCountLabelShouldHaveText('You have 13 parts on your list.');

        partManager.clickPageLink(1);

        partManager.partIdShouldHaveText(2, '13');
        partManager.partPartNameShouldHaveText(2, 'My new part');
        partManager.partVwOemNumberShouldHaveText(2, '321-555-222-A');
        partManager.partWebshopNameShouldHaveText(2, 'Justkampers');
        partManager.partHaveItYesNoShouldHaveText(2, 'Yes');
        partManager.partPurchaseDateShouldHaveText(2, '2015-05-06');
        partManager.partPriceShouldHaveText(2, '12345');
    });

    it('should edit part', () => {
        partManager.totalCountLabelShouldHaveText('You have 12 parts on your list.');

        partManager.partIdShouldHaveText(0, '1');
        partManager.partPartNameShouldHaveText(0, 'Porsche alloy wheel');
        partManager.partVwOemNumberShouldHaveText(0, '123-234-456-A');
        partManager.partWebshopNameShouldHaveText(0, 'vwheritage');
        partManager.partHaveItYesNoShouldHaveText(0, 'No');
        partManager.partPurchaseDateShouldHaveText(0, '');
        partManager.partPriceShouldHaveText(0, '36058');
        
        partManager.clickEditPartButton(0);

        partEditor.shouldHavePartName('Porsche alloy wheel');
        partEditor.shouldHaveVwOemNumber('123-234-456-A');
        partEditor.webshopNameByTextShouldBeSelected('vwheritage');
        partEditor.shouldHaveProductUrl('https://www.vwheritage.com/shop/bay-bus/AC601002BP/wheel-ssp-brm-black-polished-5-205-5-x15-et14/?crumbStartPage=1&crumbStartRow=1');
        partEditor.shouldHavePictureUrl('https://d2m4kcr6k6fa8s.cloudfront.net/_img/products/33156921/0727560B-6905-448C-BC2F-B801703874BE.jpg');
        partEditor.haveItShouldNotBeSelected();
        partEditor.shouldHavePrice('36058');

        partEditor.setPartName('Porsche alloy wheel updated');
        partEditor.setVwOemNumber('321-555-222-B');
        partEditor.selectWebshopNameByText('Justkampers');
        partEditor.setProductUrl('http://www.example.com');
        partEditor.setPictureUrl('http://images.thesamba.com/vw/gallery/pix/490560.jpg');
        partEditor.clickHaveIt();
        partEditor.setPurchaseDate('06052015');
        partEditor.setPrice('12345');
        
        partEditor.clickCancelButton();

        partManager.totalCountLabelShouldHaveText('You have 12 parts on your list.');

        partManager.partIdShouldHaveText(0, '1');
        partManager.partPartNameShouldHaveText(0, 'Porsche alloy wheel');
        partManager.partVwOemNumberShouldHaveText(0, '123-234-456-A');
        partManager.partWebshopNameShouldHaveText(0, 'vwheritage');
        partManager.partHaveItYesNoShouldHaveText(0, 'No');
        partManager.partPurchaseDateShouldHaveText(0, '');
        partManager.partPriceShouldHaveText(0, '36058');

        partManager.clickEditPartButton(0);

        partEditor.shouldHavePartName('Porsche alloy wheel');
        partEditor.shouldHaveVwOemNumber('123-234-456-A');
        partEditor.webshopNameByTextShouldBeSelected('vwheritage');
        partEditor.shouldHaveProductUrl('https://www.vwheritage.com/shop/bay-bus/AC601002BP/wheel-ssp-brm-black-polished-5-205-5-x15-et14/?crumbStartPage=1&crumbStartRow=1');
        partEditor.shouldHavePictureUrl('https://d2m4kcr6k6fa8s.cloudfront.net/_img/products/33156921/0727560B-6905-448C-BC2F-B801703874BE.jpg');
        partEditor.haveItShouldNotBeSelected();
        partEditor.shouldHavePrice('36058');

        partEditor.setPartName('Porsche alloy wheel updated');
        partEditor.setVwOemNumber('123-234-456-B');
        partEditor.selectWebshopNameByText('Justkampers');
        partEditor.setProductUrl('http://www.example.com');
        partEditor.setPictureUrl('http://images.thesamba.com/vw/gallery/pix/490560.jpg');
        partEditor.clickHaveIt();
        partEditor.setPurchaseDate('06052015');
        partEditor.setPrice('12345');
        
        partEditor.clickSaveButton();

        partManager.totalCountLabelShouldHaveText('You have 12 parts on your list.');

        partManager.partIdShouldHaveText(0, '1');
        partManager.partPartNameShouldHaveText(0, 'Porsche alloy wheel updated');
        partManager.partVwOemNumberShouldHaveText(0, '123-234-456-B');
        partManager.partWebshopNameShouldHaveText(0, 'Justkampers');
        partManager.partHaveItYesNoShouldHaveText(0, 'Yes');
        partManager.partPurchaseDateShouldHaveText(0, '2015-05-06');
        partManager.partPriceShouldHaveText(0, '12345');

        partManager.clickEditPartButton(0);

        partEditor.shouldHavePartName('Porsche alloy wheel updated');
        partEditor.shouldHaveVwOemNumber('123-234-456-B');
        partEditor.webshopNameByTextShouldBeSelected('Justkampers');
        partEditor.shouldHaveProductUrl('http://www.example.com');
        partEditor.shouldHavePictureUrl('http://images.thesamba.com/vw/gallery/pix/490560.jpg');
        partEditor.haveItShouldBeSelected();
        partEditor.shouldHavePurchaseDate('2015-05-06');
        partEditor.shouldHavePrice('12345');
    });

    it('should delete part', () => {
        partManager.totalCountLabelShouldHaveText('You have 12 parts on your list.');

        partManager.partIdShouldHaveText(0, '1');
        partManager.partPartNameShouldHaveText(0, 'Porsche alloy wheel');
        partManager.partVwOemNumberShouldHaveText(0, '123-234-456-A');
        partManager.partWebshopNameShouldHaveText(0, 'vwheritage');
        partManager.partHaveItYesNoShouldHaveText(0, 'No');
        partManager.partPurchaseDateShouldHaveText(0, '');
        partManager.partPriceShouldHaveText(0, '36058');

        partManager.clickDeletePartButton(0);

        partManager.totalCountLabelShouldHaveText('You have 11 parts on your list.');

        partManager.partIdShouldHaveText(0, '2');
        partManager.partPartNameShouldHaveText(0, 'Front suspension');
        partManager.partVwOemNumberShouldHaveText(0, '567-987-567');
        partManager.partWebshopNameShouldHaveText(0, 'Justkampers');
        partManager.partHaveItYesNoShouldHaveText(0, 'No');
        partManager.partPurchaseDateShouldHaveText(0, '');
        partManager.partPriceShouldHaveText(0, '32000');
    });
});
