Cypress.Commands.add('loadPage', () => {
  cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
    
      movies: [
      {
      id: 436270,
      poster_path: "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
      title: "Black Adam",
      average_rating: 4,
      release_date: "2022-10-19"
      },
      {
      id: 724495,
      poster_path: "https://image.tmdb.org/t/p/original//438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
      title: "The Woman King",
      average_rating: 4,
      release_date: "2022-09-15"
      },
      {
      id: 1013860,
      poster_path: "https://image.tmdb.org/t/p/original//g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//kmzppWh7ljL6K9fXW72bPN3gKwu.jpg",
      title: "R.I.P.D. 2: Rise of the Damned",
      average_rating: 7,
      release_date: "2022-11-15"
      },
      {
      id: 505642,
      poster_path: "https://image.tmdb.org/t/p/original//ps2oKfhY6DL3alynlSqY97gHSsg.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
      title: "Black Panther: Wakanda Forever",
      average_rating: 4,
      release_date: "2022-11-09"
      },
      {
      id: 934641,
      poster_path: "https://image.tmdb.org/t/p/original//pUPwTbnAqfm95BZjNBnMMf39ChT.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//sP1ShE4BGLkHSRqG9ZeGHg6C76t.jpg",
      title: "The Minute You Wake Up Dead",
      average_rating: 5,
      release_date: "2022-11-04"
      }
      ]
          
  })
}) 

Cypress.Commands.add('loadSingleMovie', () => {
  cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', 
    {
      movie: {
      id: 436270,
      title: "Black Adam",
      poster_path: "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
      release_date: "2022-10-19",
      overview: "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
      genres: [
      "Action",
      "Fantasy",
      "Science Fiction"
      ],
      budget: 200000000,
      revenue: 384571691,
      runtime: 125,
      tagline: "The world needed a hero. It got Black Adam.",
      average_rating: 4
      }
      
})
})
