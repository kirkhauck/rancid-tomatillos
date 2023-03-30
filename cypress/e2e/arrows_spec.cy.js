describe('Browser Forward/Back Arrows', () => {
  beforeEach('go to movie details', () => {
    cy.visit('http://localhost:3000')
    cy.loadPage()
    cy.get('.movie-card').contains('h3', 'Black Adam').click()
    cy.loadSingleMovie()
  });

  it('should show a single movie\'s details', () => {
    cy.url().should('include', '/436270');
    
    cy.get('.banner').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg')
    
    cy.get('.movie-title-tagline').contains('h1', 'Black Adam')
      .get('.movie-overview').contains("Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.")
  });

  it('should go back to the main page when the browser back arrow is clicked', () => {
    cy.go('back').url().should('eq', 'http://localhost:3000/')

    cy.get('.movie-card').should('have.length', 5)
      .get('.movie-card:first()').contains('h3', 'Black Adam')
      .get('.movie-card:last()').contains('h3', 'The Minute You Wake Up Dead')
  });

  it('should go back to the same movie details page if the user clicks the back arrow then the forward arrow', () => {
    cy.go('back').go('forward').url().should('include', '/436270')

    cy.get('.banner').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg')
    
    cy.get('.movie-title-tagline').contains('h1', 'Black Adam')
      .get('.movie-overview').contains("Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.")
  });
});