import { BasePage } from './base.page';

export class HomePage extends BasePage {
  async searchProduct(productName: string) {
    const searchInput = this.page.locator('input[name="field-keywords"]');
    const searchButton = this.page.locator('#nav-search-submit-button');

    await searchInput.fill(productName);
    await searchButton.waitFor({ state: 'visible' });
    await searchButton.click();
  }
}
