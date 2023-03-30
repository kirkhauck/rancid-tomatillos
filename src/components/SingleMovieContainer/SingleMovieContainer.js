import React, {Component} from 'react';
import PropTypes from 'prop-types';
import getMovieData from '../../ApiCall';
import MovieDetailsSection from '../MovieDetailsSection/MovieDetailsSection';
import SingleMovieBanner from '../SingleMovieBanner/SingleMovieBanner';
import ButtonHome from '../ButtonHome/ButtonHome'
import './SingleMovieContainer.css'


class SingleMovieContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      singleMovieData: '',
      error: ''
    }
  }

  componentDidMount = () => {
    getMovieData(this.props.id).then(data => this.setState({ singleMovieData: data }))
    .catch(error => this.setState({error: error}))
  }

  resetState = () => {
    this.setState({singleMovieData : ''})
  }
  
  render() {
    return (
      <div>
        <ButtonHome resetState={this.resetState}/>
        {this.state.error && <p>Something went wrong when loading the movie. Click Home to select another movie.</p>}
        {this.state.singleMovieData &&  <SingleMovieBanner image={this.state.singleMovieData.movie.backdrop_path}/>}
        {this.state.singleMovieData &&  <MovieDetailsSection details={this.state.singleMovieData}/>}
      </div>
    );
  }
}

SingleMovieContainer.propTypes = {
  movieId: PropTypes.number
}

export default SingleMovieContainer;