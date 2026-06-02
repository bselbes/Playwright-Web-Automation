class HeaderComponent {
  constructor(page) {
    this.page = page;

    this.searchInput = page
      .getByPlaceholder('Aradığınız ürün, kategori veya markayı yazınız')
      .or(page.locator('input[data-testid="suggestion"]'));

    this.basketButton = page.getByText('Sepetim').first();
  }

  async search(productName) {
    await this.searchInput.fill(productName);
    await this.searchInput.press('Enter');
  }

  async goToBasket() {
    await this.basketButton.click();
  }
}

module.exports = { HeaderComponent };