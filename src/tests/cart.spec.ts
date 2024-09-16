import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { SearchPage } from '../pages/search.page';
import { ProductPage } from '../pages/product.page';
import { CartPage } from '../pages/cart.page';

test('Add product to cart', async ({ page }) => {
  const homePage = new HomePage(page);
  const searchPage = new SearchPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  await homePage.navigate('/');
  await homePage.searchProduct('samsung');

  const results = await searchPage.getResults();
  const thirdResult = results.nth(2);
  await thirdResult.click();
  await productPage.addToCart();
  await cartPage.verifyProductInCart('Samsung', 'SAMSUNG', 'samsung');
});
