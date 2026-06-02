const { BasePage } = require('./BasePage');

class ProductDetailPage extends BasePage {
  constructor(page) {
    super(page);

    this.addToBasketButton = page.getByText('Sepete Ekle').first();
    this.successMessage = page.locator('text=/Sepete|sepetine|eklendi/i').first();
  }

  async verifyLoaded() {
    await this.expectVisible(this.addToBasketButton);
  }

  async addToBasket() {
    await this.click(this.addToBasketButton);
  }

  async verifyProductAddedToBasket() {
    await this.expectVisible(this.successMessage);
  }
}

module.exports = { ProductDetailPage };