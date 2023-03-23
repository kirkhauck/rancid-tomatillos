import React, {Component} from 'react';
import movieMockData from '../../movieData/movieData';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: {},
      selectedMovie: {}
    }
  }
  
  componentDidMount = () => {
    this.setState({ movieData: movieMockData });
  }

  render() {
    return (
      <h1>Hello world!</h1>
    );
  }
}

export default App;
