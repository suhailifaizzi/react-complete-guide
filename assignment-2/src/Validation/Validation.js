import React from 'react';

const validation = (props) => {
  let validationMessage = 'Text long enough'

  if (props.inputLength <= 5) {
    validationMessage = 'Text too short'
  }

  return(
    <div>
        {/* {
          props.inputLength > 5 ?
            <p>Text too long!</p> :
            <p>Text too short!</p>
        } */}
        <p>{validationMessage}</p>
    </div>
  );
};

export default validation;
