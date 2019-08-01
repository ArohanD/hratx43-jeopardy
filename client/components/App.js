import React, { Component } from 'react';
import { categories } from '../../testdata';
import Gameboard from './Gameboard'
import Scoreboard from './Scoreboard'
import Response from './Response'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      currentQuestion: {},
      answeredQuestions: [],
      score: 0,
    };
  }

  componentDidMount() {
    fetch("http://jservice.io/api/categories?count=100")
      .then(res => res.json())
      .then(
        (result) => {
          // map results
          let newResults = [];
          for (let i = 0; i <100; i+=20){
            let index = Math.floor(Math.random()*20)
            newResults.push(result[index+i])
          }
          newResults.map(category => {
            fetch(`http://jservice.io/api/category?id=${category.id}`)
              .then(res => res.json())
              .then(clues => {
                let newClues = clues.clues.slice(0,5)
                clues.clues = newClues;
                this.setState({ results: this.state.results.concat(clues)});
              })
          })
        })
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
      console.log(this.state.currentQuestion.answer)
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
