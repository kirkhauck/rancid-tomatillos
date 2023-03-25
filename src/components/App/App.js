import React, {Component} from 'react';
import getMovieData from '../../ApiCall';
import Header from '../Header/Header';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
// import movieMockData from '../../movieData/movieData';
import './App.css';
import SingleMovieContainer from '../SingleMovieContainer/SingleMovieContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: '',
      selectedMovieId: ''
    }
  }
  
  componentDidMount() {
    getMovieData().then(data => this.setState({movieData: data}));
    // this.setState({ movieData: movieMockData });
  }

  selectMovie = id => {
    this.setState({ selectedMovieId: id });
    this.forceUpdate();
  }

  clearMovieId = () => {
    this.setState({selectedMovieId: ''});
  }

  render() {
    return (
      <main className='App'>
        <Header />
        {this.state.movieData && !this.state.selectedMovieId ?
        <MoviesContainer
          movieData={this.state.movieData}
          selectMovie={this.selectMovie}
        /> :
        /*<p>Loading...</p>*/ null}
        {this.state.selectedMovieId && <SingleMovieContainer clearMovieId={this.clearMovieId} movieId={this.state.selectedMovieId}/>}
      </main>
    );
  }
}

export default App;