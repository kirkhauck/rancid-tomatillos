import React, {Component} from 'react';
import getMovieData from '../../ApiCall';
import Header from '../Header/Header';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import './App.css';
import SingleMovieContainer from '../SingleMovieContainer/SingleMovieContainer';
import { Route } from 'react-router-dom';

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
  }

  selectMovie = id => {
    this.setState({ selectedMovieId: id });
    this.forceUpdate();
  }

  render() {
    return (
      <main className='App'>
        <Header />
        { this.state.movieData && !this.state.selectedMovieId &&
          <Route exact path='/' render={ () => <MoviesContainer
            movieData={this.state.movieData}
            selectMovie={this.selectMovie}
            />}
          />
        }
        <Route exact path={'/:id'} render={ ({ match }) => <SingleMovieContainer id={match.params.id}/>} />
      </main>
    );
  }
}

export default App;