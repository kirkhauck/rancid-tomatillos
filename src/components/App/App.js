import React, {Component} from 'react';
import Header from '../Header/Header';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import movieMockData from '../../movieData/movieData';
// import singleMovieData from '../singleMovieData1/singleMovieData';
// import singleMovieData from '../singleMovieData2/singleMovieData';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: '',
      // singleMovie: ''
      selectedMovie: ''
    }
  }
  
  componentDidMount = () => {
    this.setState({ movieData: movieMockData });
  }

  render() {
    return (
      <main className='App'>
        <Header />
        {this.state.movieData ? <MoviesContainer movieData={this.state.movieData} /> : <p>Loading...</p>}
      </main>
    );
  }
}

export default App;