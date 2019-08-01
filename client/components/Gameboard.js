import React from 'react';
import PropTypes from 'prop-types';
import Categories from './Categories';
import Clue from './Clue'

const Gameboard = props => {
  return (
    <div data-testid="gameboard" id={props.currentQuestion.question ? 'question' : 'gameboard'}>
      {props.currentQuestion.question ? 
        <Clue selected={true} 
              selectQuestion={props.selectQuestion}
              answered={false}
              clueObject={props.currentQuestion}
              currentQuestion={props.currentQuestion}
              />
      : <Categories categories={props.categories}
                  selectQuestion={props.selectQuestion}
                  currentQuestion={props.currentQuestion}
                  answeredQuestions={props.answeredQuestions}
                  />
      }</div>
  );
};

Gameboard.propTypes = {
  currentQuestion: PropTypes.object,
  selectQuestion: PropTypes.func,
  categories: PropTypes.array,
  answeredQuestions: PropTypes.array
};

export default Gameboard;
