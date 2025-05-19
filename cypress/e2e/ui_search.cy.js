import HomePage from '../support/page_object/HomePage';
import SearchResultPage from '../support/page_object/SearchResultPage';

describe('Search Functionality', () => {
  it('should search for products using partial keywords', () => {
    HomePage.visit();
    HomePage.searchFor('Fusion');
    SearchResultPage.getResultsCount().should('have.length.gt', 0);
    SearchResultPage.verifyProductInResults('Fusion');
  });
});
