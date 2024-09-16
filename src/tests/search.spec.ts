import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { SearchPage } from '../pages/search.page';

test('Search and filter products', async ({ page }) => {
  const homePage = new HomePage(page);
  const searchPage = new SearchPage(page);

  await homePage.navigate('/');
  await homePage.searchProduct('samsung');
  await searchPage.getResults();

  await searchPage.applyFilter('samsung');
  await searchPage.getResults();

});
