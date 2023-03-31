import React, {Component} from 'react';
import getMovieData from '../../ApiCall';
import Header from '../Header/Header';
import Error from '../Error/Error';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import './App.css';
import SingleMovieContainer from '../SingleMovieContainer/SingleMovieContainer';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: '',
      selectedMovieId: '',
      error: ''
    }
  }
  
  componentDidMount() {
    getMovieData().then(data => this.setState({movieData: data}))
    .catch(error => this.setState({ error: error }));
  }

  selectMovie = id => {
    this.setState({ selectedMovieId: id });
    this.forceUpdate();
  }

  render() {
 
    return (
      <main className='App'>
        <Header />
        <Switch>
        { this.state.movieData && !this.state.selectedMovieId &&
          <Route exact path='/' render={ () => <MoviesContainer
            movieData={this.state.movieData}
            selectMovie={this.selectMovie}
            />}
          />
        }
        {this.state.error && <Error />}
          <Route exact path={'/:id'} render={ ({ match }) => <SingleMovieContainer id={match.params.id}/>} />
        </Switch>
      </main>
    );
  }
}

export default App;