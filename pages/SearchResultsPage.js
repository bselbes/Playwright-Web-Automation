const { BasePage } = require('./BasePage');
const { ProductDetailPage } = require('./ProductDetailPage');

class SearchResultsPage extends BasePage {
  constructor(page) {
    super(page);

    this.productCards = page.locator('.p-card-wrppr');
  }

  async verifySearchCompleted(productName) {
    await this.expectUrlContains(productName);
  }

  async verifyProductsListed() {
    await this.productCards.first().waitFor({ state: 'visible' });

    const productCount = await this.productCards.count();

    if (productCount === 0) {
      throw new Error('Arama sonucunda ürün listelenmedi.');
    }
  }

  async openFirstProduct() {
    await this.productCards.first().waitFor({ state: 'visible' });

    const context = this.page.context();

    const [newPage] = await Promise.all([
      context.waitForEvent('page').catch(() => null),
      this.productCards.first().click()
    ]);

    if (newPage) {
      await newPage.waitForLoadState('domcontentloaded');
      return new ProductDetailPage(newPage);
    }

    await this.page.waitForLoadState('domcontentloaded');
    return new ProductDetailPage(this.page);
  }
}

module.exports = { SearchResultsPage };