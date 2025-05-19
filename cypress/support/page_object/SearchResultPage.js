// class SearchResultPage {
//   scrollSearchResult() {
//     cy.scrollTo('bottom', { duration: 3000 });
//   }

//   validateResultsContain(productName) {
//     cy.contains('.product-item-name', productName).should('be.visible');
//   }

//   selectSpecificProduct(productName) {
//     cy.contains('.product-item-name', productName)
//       .closest('.product-item')
//       .find('a')
//       .should('be.visible')
//       .click({ force: true });
//   }
// }

// export default new SearchResultPage();

// cypress/support/page_object/SearchResultPage.js
class SearchResultPage {
  getResultsCount() {
    return cy.get('.product-item'); // Assuming this selector represents product items
  }

  scrollSearchResult() {
    cy.scrollTo('bottom', { duration: 3000 });
  }

  verifyProductInResults(productName) {
    cy.get('.product-item').should('contain', productName);
  }
}

export default new SearchResultPage();
