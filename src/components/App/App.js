import React, {Component} from 'react';
import Header from '../Header/Header';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import movieMockData from '../../movieData/movieData';
import './App.css';
import SingleMovieContainer from '../SingleMovieContainer/SingleMovieContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: '',
      selectedMovie: ''
    }
  }
  
  componentDidMount = () => {
    this.setState({ movieData: movieMockData });
  }

  selectMovie = id => {
    this.setState({ selectedMovie: id });
  }

  render() {
    return (
      <main className='App'>
        <Header />
        {this.state.movieData ?
        <MoviesContainer
          movieData={this.state.movieData}
          selectMovie={this.selectMovie}
        /> :
        <p>Loading...</p>}
        <SingleMovieContainer />
      </main>
    );
  }
}

export default App;