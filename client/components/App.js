import React, { Component } from 'react';
import { categories } from '../../testdata';
import Gameboard from './Gameboard'
import Scoreboard from './Scoreboard'
import Response from './Response'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: categories,
      currentQuestion: {},
      answeredQuestions: [],
      score: 0
    };
  }
  componentDidMount() {
    // Getting data from an external API
    //1. A query to /api/categories to get a set of categories
    //2. A set of queries afterwards to /api/category at each category id to get clues for that category
  }
  submitResponse() {

  }

  recordResponse() {

  }
  render() {
    return (
      <div id={'app'}>
        <Gameboard currentQuestion={this.state.currentQuestion}
                   selectQuestion={this.state.selectQuestion}
                   categories={this.state.results}
                   answeredQuestions={this.state.answeredQuestions}
                   />
        <Scoreboard score={this.state.score}/>
        <Response recordResponse={this.recordResponse}
                  submitResponse={this.submitResponse}
                  />
      </div>
    );
  }
}
