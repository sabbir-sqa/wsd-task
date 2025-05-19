class HomePage {
  visit() {
    cy.visit('/');
  }

  searchFor(keyword) {
    cy.get('#search').type(keyword);
    cy.get('.action.search').click();
  }
}

export default new HomePage();
