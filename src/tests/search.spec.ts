import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { SearchPage } from '../pages/search.page';

test('Search and filter products', async ({ page }) => {
  const homePage = new HomePage(page);
  const searchPage = new SearchPage(page);

  await homePage.navigate('/');
  await homePage.searchProduct('samsung');
  const results = await searchPage.getResults();
 // expect(results.length()).toBeGreaterThan(0);

  await searchPage.applyFilter('samsung');
  const filteredResults = await searchPage.getResults();
 // expect(filteredResults.count()).toBeGreaterThan(0);
});
