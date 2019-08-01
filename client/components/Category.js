import React from 'react';
import PropTypes from 'prop-types';
import Clue from './Clue'

const Category = props => {
  return (
    <div className={'category'} data-testid="category">
      {/* display category */}
      <div className={"categoryTitle"}>{props.title.toUpperCase()}</div>
      {/* display clues for each category */}
      {props.clues.map(clue => 
        <Clue selected={(props.currentQuestion.id === props.currentQuestion.id)}
              selectQuestion={props.selectQuestion}
              answered={props.answeredQuestions.includes(clue.id)}
              clueObject={clue}
              key={clue.id}
              />
      )}
    </div>
  );
};

Category.propTypes = {
  title: PropTypes.string,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array,
  clues: PropTypes.array
};

export default Category;
