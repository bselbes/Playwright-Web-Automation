const { test } = require('../../fixtures/testFixtures');
const { AllureHelper } = require('../../utils/allureHelper');
const products = require('../../data/products.json');

test.describe('Basket Feature', () => {
  test('@regression @basket user should add first product to basket', async ({
    page,
    homePage,
    searchResultsPage
  }) => {
    await AllureHelper.setMetadata({
      epic: 'E-Commerce',
      feature: 'Basket',
      story: 'Add first product to basket',
      severity: 'critical',
      owner: 'Berkay Selbes',
      tags: ['regression', 'basket', 'ui'],
      description: 'User searches a product, opens first listed product and adds it to basket.'
    });

    let productDetailPage;

    await test.step('Open home page', async () => {
      await homePage.open();
    });

    await test.step('Search product', async () => {
      await homePage.searchProduct(products.validProduct);
    });

    await test.step('Verify products are listed', async () => {
      await searchResultsPage.verifySearchCompleted(products.validProduct);
      await searchResultsPage.verifyProductsListed();
    });

    await test.step('Open first product', async () => {
      productDetailPage = await searchResultsPage.openFirstProduct();
      await productDetailPage.verifyLoaded();
    });

    await test.step('Add product to basket', async () => {
      await productDetailPage.addToBasket();
    });

    await test.step('Verify product added to basket', async () => {
      await productDetailPage.verifyProductAddedToBasket();
    });

    await test.step('Attach final screenshot', async () => {
      await AllureHelper.attachScreenshot('Product Detail After Add Basket', page);
    });
  });
});