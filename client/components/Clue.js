import React from 'react';
import PropTypes from 'prop-types';

const Clue = props => {
  // show $ value of clue OR
  // the Clue question itself OR
  // empty screen if it was already answered
  return (
    <div className={'clueValue'}>
      {
        props.answered ? null :
        (props.selected ? '$' + props.clueObject.value : 
        props.clueObject.question)
      }
    </div>
  )
};

Clue.propTypes = {
  selected: PropTypes.bool,
  selectQuestion: PropTypes.func,
  answered: PropTypes.bool,
  clueObject: PropTypes.object
};

export default Clue;
