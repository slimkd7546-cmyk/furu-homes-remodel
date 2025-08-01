describe('Portfolio Page', () => {
  it('should load correctly on all browsers', () => {
    cy.visit('/portfolio');
    cy.get('h1').should('contain', 'Our Portfolio');
  });
});

module.exports = {
  projectId: "<Please create a project in Cypress Cloud>",
  // ...rest of the Cypress project config
};
