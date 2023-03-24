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

  render() {
    return (
      <main className='App'>
        <Header />
        {/* {this.state.movieData ? <MoviesContainer movieData={this.state.movieData} /> : <p>Loading...</p>} */}
        <SingleMovieContainer />
      </main>
    );
  }
}

export default App;