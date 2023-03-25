import React, {Component} from 'react';
import singleMockData1 from '../../singleMovieData/singleMovie1';
import singleMockData2 from '../../singleMovieData/singleMovie2';
import MovieDetailsSection from '../MovieDetailsSection/MovieDetailsSection';
import SingleMovieBanner from '../SingleMovieBanner/SingleMovieBanner';
import ButtonHome from '../ButtonHome/ButtonHome'


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

  resetState = () => {
    this.setState({singleMovieData : ''})
  }

  render() {
    return (
      <div>
        <ButtonHome clearMovieId={this.props.clearMovieId} resetState={this.resetState}/>
        {this.state.singleMovieData &&  <SingleMovieBanner image={this.state.singleMovieData.movie.backdrop_path}/>}
        {this.state.singleMovieData &&  <MovieDetailsSection details={this.state.singleMovieData}/>}
      </div>
    );
  }
}

export default SingleMovieContainer;