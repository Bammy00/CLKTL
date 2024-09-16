import { BasePage } from './base.page';

export class ProductPage extends BasePage {
  async addToCart() {
    await this.page.click('#a-autoid-1-announce');
    await this.page.waitForSelector('text=Item Added', { state: 'visible' });
    await this.page.waitForSelector('text=Item Added', { state: 'hidden' });
    //await new Promise(resolve => setTimeout(resolve, 5000));
    await this.page.click('#nav-cart');
  }
}
