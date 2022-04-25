import React from 'react';
import './Hint.css';
import questions from '../../questions.json';

function Hint (props) {
  const currentChapter = props.currentChapter;
  const currentStep = props.currentStep;

  return (
    <>
      <div className='hint_modal'>{questions[currentChapter][currentStep - 1].hint}</div>
    </>
  );
}

export default Hint;
