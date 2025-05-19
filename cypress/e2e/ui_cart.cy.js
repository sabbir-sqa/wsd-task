import HomePage from '../support/page_object/HomePage';
import SearchResultPage from '../support/page_object/SearchResultPage';
import ProductDetailPage from '../support/page_object/ProductDetailPage';
import CartPage from '../support/page_object/CartPage';

describe('Cart Functionality', () => {
  it('should add a product to the cart and remove it', () => {
    HomePage.visit();

    HomePage.searchFor('Orestes Fitness Short');

    cy.get('.product-item').contains('Orestes Fitness Short').click();

    ProductDetailPage.selectSize('Medium');
    ProductDetailPage.selectColor('Black');
    ProductDetailPage.addToCart();
    ProductDetailPage.verifyProductAddedToCart('Orestes Fitness Short');

    CartPage.navigateToCart();
    CartPage.verifyProductInCart('Orestes Fitness Short');
    CartPage.removeProductFromCart();

    cy.get('.cart-empty').should('be.visible');
  });
});
