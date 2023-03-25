import React, {Component} from 'react';
import PropTypes from 'prop-types';
import getMovieData from '../../ApiCall';
// import singleMockData1 from '../../singleMovieData/singleMovie1';
// import singleMockData2 from '../../singleMovieData/singleMovie2';
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
    getMovieData(this.props.movieId).then(data => this.setState({ singleMovieData: data }))
    // this.setState({ singleMovieData: singleMockData1 });
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

SingleMovieContainer.propTypes = {
  clearMovieId: PropTypes.func,
  movieId: PropTypes.number
}

export default SingleMovieContainer;