import { BasePage } from './base.page';

export class ProductPage extends BasePage {
  async addToCart() {
    const addToCartButton = this.page.locator('#a-autoid-1-announce');
    const itemAddedText = this.page.locator('text=Item Added');
    const cartButton = this.page.locator('#nav-cart');

    await addToCartButton.click();
    await itemAddedText.waitFor({ state: 'visible' });
    await itemAddedText.waitFor({ state: 'hidden' });
    await cartButton.click();
  }
}
