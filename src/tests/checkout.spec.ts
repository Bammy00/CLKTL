import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { SearchPage } from '../pages/search.page';
import { ProductPage } from '../pages/product.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';

test('Checkout process', async ({ page }) => {
  const homePage = new HomePage(page);
  const searchPage = new SearchPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await homePage.navigate('/');
  await homePage.searchProduct('samsung');
  
  // Get the results and select the third one
  const results = await searchPage.getResults();
  const thirdResult = results.nth(2); // Index starts at 0, so 2 is the third item

  // Now we can interact with the third result
  await thirdResult.click();

  await productPage.addToCart();
  await page.click('#nav-cart');
  await cartPage.verifyProductInCart('Samsung');
  await checkoutPage.proceedToCheckout();
  expect(page.url()).toContain('https://www.amazon.com/ap/signin');
});
