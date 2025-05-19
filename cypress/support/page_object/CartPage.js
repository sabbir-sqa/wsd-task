class CartPage {
  navigateToCart() {
    cy.get('.minicart-link').click();
  }

  verifyProductInCart(productName) {
    cy.get('.item-name').should('contain', productName);
  }

  removeProductFromCart() {
    cy.get('.action.delete').click();
  }
}

export default new CartPage();
