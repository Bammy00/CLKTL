import { BasePage } from './base.page';

export class CheckoutPage extends BasePage {
  async proceedToCheckout() {
    await this.page.click('input[name="proceedToRetailCheckout"]');
  }
}
