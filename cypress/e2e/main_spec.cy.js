describe('Rancid Tomatillos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should show the main page with a header', () => {
    cy.get('.header').find('img');
    cy.get('.header').contains('h1', 'Rancid Tomatillos');
  });

  it('Should show thumbnails of all the movies', () => {
    cy.get('.movie-card').should('have.length', 40)
    cy.get('.movie-card').find('img');
    cy.get('.movie-card').find('h3');
    cy.get('.movie-card').find('p');
  });

  
})

describe('Rancid Tomatillos Details Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000').click();
  });
     it('Should show the details page with the header', () => {
     cy.get('.header').find('img');
     cy.get('.header').contains('h1', 'Rancid Tomatillos');
   });
  })

