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

  selectQuestion(clue){
    this.setState({
      currentQuestion: clue,
    });
  }

  submitAnswer(answer){
    if(this.state.currentQuestion.question){
      if(answer.toLowerCase() 
      === this.state.currentQuestion.answer.toLowerCase()){
        let newScore = this.state.score + this.state.currentQuestion.value;
        this.setState({score: newScore})
      } else {
        let newScore = this.state.score - this.state.currentQuestion.value;
        this.setState({score: newScore})
      }
      this.state.answeredQuestions.push(this.state.currentQuestion.id);
      this.state.currentQuestion = {};
    }
  }

  render() {
    return (
      <div id={'app'}>
        <Gameboard currentQuestion={this.state.currentQuestion}
                   selectQuestion={this.selectQuestion.bind(this)}
                   categories={this.state.results}
                   answeredQuestions={this.state.answeredQuestions}
                   />
        <Scoreboard score={this.state.score}/>
        <Response submitAnswer={this.submitAnswer.bind(this)}
                  />
      </div>
    );
  }
}
