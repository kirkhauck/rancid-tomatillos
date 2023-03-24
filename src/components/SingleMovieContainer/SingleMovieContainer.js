import React, {Component} from 'react';
import singleMockData1 from '../../singleMovieData/singleMovie1';
import singleMockData2 from '../../singleMovieData/singleMovie2';

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
        <h1>Hi!</h1>
      </div>
    );
  }
}

export default SingleMovieContainer;