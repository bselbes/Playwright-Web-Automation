class CookieBannerComponent {
  constructor(page) {
    this.page = page;
    this.acceptButton = page.getByText('Kabul Et').first();
  }

  async acceptIfVisible() {
    const visible = await this.acceptButton.isVisible().catch(() => false);

    if (visible) {
      await this.acceptButton.click();
    }
  }
}

module.exports = { CookieBannerComponent };