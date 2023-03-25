const getMovieData = id => {
  let path;
  id ? path = id : path = ''
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${path}`)
  .then((response) => {
    if(!response.ok){
      throw new Error( `${response.status}:${response.statusText}`)
    }
      return response.json();
  })
}
export default getMovieData