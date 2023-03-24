import React, {Component} from 'react';
import Header from '../Header/Header';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import movieMockData from '../../movieData/movieData';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: movieMockData,
      selectedMovie: {}
    }
  }
  
  componentDidMount = () => {
    this.setState({ movieData: movieMockData });
  }

  render() {
    return (
      <main className='App'>
        <Header />
        <MoviesContainer movieData={this.state.movieData} />
      </main>
    );
  }
}

export default App;