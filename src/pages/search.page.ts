import { BasePage } from './base.page';

export class SearchPage extends BasePage {
  async applyFilter(filter: string) {
    await this.page.click(`text=${filter}`);
  }

  async getResults() {
    return this.page.locator('.s-search-results .s-result-item');
  }
}
