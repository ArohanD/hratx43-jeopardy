import React from 'react';
import PropTypes from 'prop-types';

const Clue = props => {
  // show $ value of clue OR
  // the Clue question itself OR
  // empty screen if it was already answered
  return (
    <div className={props.currentQuestion.question ? null : 'clueValue'} onClick={(event) => 
      props.selectQuestion(props.clueObject)
      }>
      {
        (props.answered ? null :
        (props.selected ? props.clueObject.question : 
        '$' + props.clueObject.value))
      }
    </div>
  )
};

Clue.propTypes = {
  selected: PropTypes.bool,
  selectQuestion: PropTypes.func,
  answered: PropTypes.bool,
  clueObject: PropTypes.object,
  currentQuestion: PropTypes.object
};

export default Clue;
