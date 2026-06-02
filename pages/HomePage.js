const { BasePage } = require('./BasePage');
const { HeaderComponent } = require('../components/HeaderComponent');
const { CookieBannerComponent } = require('../components/CookieBannerComponent');

class HomePage extends BasePage {
  constructor(page) {
    super(page);

    this.header = new HeaderComponent(page);
    this.cookieBanner = new CookieBannerComponent(page);

    this.logo = page.locator('a[href="/"]').first();
  }

  async open() {
    await this.goto('/');
    await this.cookieBanner.acceptIfVisible();
  }

  async verifyLoaded() {
    await this.expectVisible(this.logo);
  }

  async searchProduct(productName) {
    await this.header.search(productName);
  }
}

module.exports = { HomePage };