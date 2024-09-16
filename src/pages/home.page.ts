import { BasePage } from './base.page';

export class HomePage extends BasePage {
  async searchProduct(productName: string) {
    await this.page.fill('input[name="field-keywords"]', productName);
    await this.page.waitForSelector('#nav-search-submit-button', { state: 'visible' });
    await this.page.click('#nav-search-submit-button');    
  }
}
