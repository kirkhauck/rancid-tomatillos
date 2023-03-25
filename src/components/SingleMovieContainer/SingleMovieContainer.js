import React, {Component} from 'react';
import singleMockData1 from '../../singleMovieData/singleMovie1';
import singleMockData2 from '../../singleMovieData/singleMovie2';
import MovieDetailsSection from '../MovieDetailsSection/MovieDetailsSection';
import SingleMovieBanner from '../SingleMovieBanner/SingleMovieBanner';


class SingleMovieContainer extends Component {
  constructor() {
    super()
    this.state = {
      singleMovieData: ''
    }
  }

  componentDidMount = () => {
    this.setState({ singleMovieData: singleMockData1 });
  }

  render() {
    return (
      <div>
        {this.state.singleMovieData &&  <SingleMovieBanner image={this.state.singleMovieData.movie.backdrop_path}/>}
        {this.state.singleMovieData &&  <MovieDetailsSection details={this.state.singleMovieData}/>}
        <h1>Hi!</h1>
      </div>
    );
  }
}

export default SingleMovieContainer;