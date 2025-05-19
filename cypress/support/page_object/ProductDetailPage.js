class ProductDetailPage {
  selectSize(size) {
    cy.get('[data-test="swatch-label"]').contains(size).click();
  }

  selectColor(color) {
    cy.get('[data-test="swatch-label"]').contains(color).click();
  }

  addToCart() {
    cy.get('.actions-primary > button[type="submit"]').click();
  }

  verifyProductAddedToCart(productName) {
    cy.get('.cart-summary').should('contain', productName);
  }
}

export default new ProductDetailPage();
