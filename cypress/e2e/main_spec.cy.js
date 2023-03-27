describe('Rancid Tomatillos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should show the main page with a header', () => {
    cy.get('.header').find('img');
    cy.get('.header').contains('h1', 'Rancid Tomatillos');
  });
});