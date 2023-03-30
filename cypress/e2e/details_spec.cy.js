describe('Rancid Tomatillos Details Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.loadPage()
    cy.get('.movie-card').contains('h3', 'Black Adam').click()
    cy.loadSingleMovie()
  });

     it('Should show the details page with the header', () => {
     cy.get('.header').find('img');
     cy.get('.header').contains('h1', 'Rancid Tomatillos');
   });
   
   it('Should have details')

  })