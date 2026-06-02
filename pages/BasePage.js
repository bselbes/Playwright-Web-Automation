const { expect } = require('@playwright/test');

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(path = '/') {
    await this.page.goto(path);
  }

  async click(locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }

  async fill(locator, value) {
    await locator.waitFor({ state: 'visible' });
    await locator.fill(value);
  }

  async press(locator, key) {
    await locator.waitFor({ state: 'visible' });
    await locator.press(key);
  }

  async expectVisible(locator) {
    await expect(locator).toBeVisible();
  }

  async expectUrlContains(text) {
    await expect(this.page).toHaveURL(new RegExp(text));
  }

  async isVisible(locator) {
    return await locator.isVisible().catch(() => false);
  }
}

module.exports = { BasePage };