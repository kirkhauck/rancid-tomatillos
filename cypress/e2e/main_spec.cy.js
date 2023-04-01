describe('Main Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.loadPage()

  });
  it('Should show the main page with a header', () => {
    cy.url().should('eq', 'http://localhost:3000/');

    cy.get('.header').contains('h1', 'Rancid Tomatillos');
  });

  it('Should show thumbnails of all the movies', () => {
    cy.get('.movie-card').should('have.length', 5);
    
    cy.get('.movie-card:first()').find('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
      .get('.movie-card:first()').contains('h3', 'Black Adam')
      .get('.movie-card:first()').find('p:first()').contains('4')
      .get('.movie-card:first()').find('p:last()').contains('Released: 10/19/2022');

    cy.get('.movie-card:last()').find('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pUPwTbnAqfm95BZjNBnMMf39ChT.jpg')
      .get('.movie-card:last()').contains('h3', 'The Minute You Wake Up Dead')
      .get('.movie-card:last()').find('p:first()').contains('5')
      .get('.movie-card:last()').find('p:last()').contains('Released: 11/04/2022');
  });

describe('Failed Main Page Fetch', () => {

  it('Should handle an error when failing to fetch.', () => {
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 404
    });
      cy.visit('http://localhost:3000');
      cy.contains('Something went wrong when loading the page. Try again.');
    });
  });
})



  




