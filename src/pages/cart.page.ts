import { BasePage } from './base.page';

export class CartPage extends BasePage {
  async verifyProductInCart(...productNames: string[]) {
    for (const productName of productNames) {
      const locator = this.page.locator(`text=${productName}`);
      if (await locator.isVisible()) {
        return true;
      }
    }
    return false;
  }
}
