# Rancid Tomatillos

## Abstract

Rancid Tomatillos is an app mimicking a movie database, created using React. Upon first visiting the site, the user is presented with a collection of movie images with basic stats such as release date, runtime, and average rating. The user can click any movie and be taken to a new page featuring more detailed information about the movie.
***

### Technologies Used:
- JavaScript
- HTML
- CSS
- React
- Router
- Cypress
***

### Installation Instructions:

1. Clone down a local copy of [the repository](https://github.com/kirkhauck/rancid-tomatillos).
1. `cd` into the repository and run `npm install`.
1. You can open the project in your preferred text editor.
1. To host the page on your local server run `npm start`.
***

### Preview of App:
![](demo.gif)
***

### Context:

Completed as part of the Turing School of Software Development 2211 FE Mod 3 curriculum

Approximate hours to completion: 25
***

### Contributors:
[Lexye Jordan](https://github.com/Lexyful)
[Kirk Hauck](https://github.com/kirkhauck)
***

### Learning Goals:

- Gain competency with React fundamentals
- Learn how to test React components & asynchronous JS
- Practice refactoring
- Create a multi-page UX using Router
***

### Wins + Challenges:

**Win:**

Successfully learned how use React components to render a stateful, functional app.

**Win:**

Successfully utilized GET and POST to use data from a remote API.

**Challenge:**

Implementing a dynamic URL presented the largest challenge for us. We were able to arrive at solution by using `render` to pass down the `match` object to `SingleMovieContainer` and use `match.params.id` to match a single movie's id (also used as its URL end path) to dynamically render a single movie's details page.

**Challenge:**

Making multiple `MovieCard` components from the API data was a challenge. We arrived at a solution by passing all the API data via props to `MoviesContainer` and using the `.map()` array prototype method to return single `MovieCard` components.