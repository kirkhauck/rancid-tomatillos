describe('Home Button', () => {
  beforeEach('Go to movie details', () => {
    cy.visit('http://localhost:3000')
    cy.loadPage()
    cy.get('.movie-card').contains('h3', 'Black Adam').click()
    cy.loadSingleMovie()
  })
  
  it('should show a home button', () => {
    cy.get('.button-home').contains('button', 'Home')
  })

  it('should go back to the home page when clicked', () => {
    cy.get('.button-home').click();

    cy.url().should('eq', 'http://localhost:3000/');

    cy.get('.header').contains('h1', 'Rancid Tomatillos');
    
    cy.get('.movie-card').should('have.length', 5);
    
    cy.get('.movie-card:first()').find('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
      .get('.movie-card:first()').contains('h3', 'Black Adam')
      .get('.movie-card:first()').find('p:first()').contains('4')
      .get('.movie-card:first()').find('p:last()').contains('10/19/2022');

    cy.get('.movie-card:last()').find('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pUPwTbnAqfm95BZjNBnMMf39ChT.jpg')
      .get('.movie-card:last()').contains('h3', 'The Minute You Wake Up Dead')
      .get('.movie-card:last()').find('p:first()').contains('5')
      .get('.movie-card:last()').find('p:last()').contains('11/04/2022');
  });
})