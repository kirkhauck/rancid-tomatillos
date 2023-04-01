import React, {Component} from 'react';
import getMovieData from '../../ApiCall';
import Header from '../Header/Header';
import Error from '../Error/Error';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import './App.css';
import SingleMovieContainer from '../SingleMovieContainer/SingleMovieContainer';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: '',
      error: ''
    }
  }
  
  componentDidMount() {
    getMovieData().then(data => this.setState({movieData: data}))
    .catch(error => this.setState({ error: error }));
  }

  render() {
 
    return (
      <main className='App'>
        <Header />
        { this.state.movieData && !this.state.selectedMovieId &&
          <Route exact path='/' render={ () => <MoviesContainer movieData={this.state.movieData} />} />
        }
        {this.state.error && <Error />}
        <Route exact path={'/:id'} render={ ({ match }) => <SingleMovieContainer id={match.params.id}/>} />
      </main>
    );
  }
}

export default App;