import React from 'react';
import PropTypes from 'prop-types';

const Response = props => {

    return (
      <div id={'response'} data-testid="response">
        <input
          type='text'
          placeholder='Answers go here!'
          onKeyPress={(key) => {
            if(key.key === 'Enter'){
              props.submitAnswer(key.target.value);
              key.target.value = '';
            }
          }}
          // handle data change
          // handle when 'enter' is hit
        >
        </input>
      </div>
    );
  
};

Response.propTypes = {
  submitAnswer: PropTypes.func
}

export default Response;