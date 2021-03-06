import React, { useState } from 'react';
import './Terminal.css';
import questions from '../questions.json';
import Modal from './modals/Modal';
import Hint from './modals/Hint';
import { useHistory } from 'react-router-dom';

function Terminal (props) {
  const currentChapter = Number(props.currentChapter);
  const currentStep = Number(props.currentStep);
  const history = useHistory();

  const [correct, isCorrect] = useState('none');
  const [inputValue, setInputValue] = useState('');
  const [hint, isHint] = useState(false);

  const checkAnswerHandler = () => {
    if (questions[props.currentChapter][currentStep - 1].answer.indexOf(inputValue) === -1) {
      wrongAnswerHandler();
    } else {
      rightAnswerHandler();
      setInputValue('');
    }
  };

  const continueHandler = () => {
    if (!questions[String(currentChapter + 1)] && currentStep === questions[props.currentChapter].length) {
      history.push('/end');
    } else if (currentStep === questions[props.currentChapter].length) {
      history.push(`/chapter${currentChapter + 1}/1`);
      isCorrect('none');
    } else {
      history.push(`/chapter${currentChapter}/${currentStep + 1}`);
      isCorrect('none');
    }
  };

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const onEnterPress = (e) => {
    if (e.key === 'Enter' && correct === 'none') {
      checkAnswerHandler();
    } else if (e.key === 'Enter' && correct === 'true') {
      continueHandler();
      isCorrect('none');
    } else if (e.key === 'Enter' && correct === 'false') {
      isCorrect('none');
      setInputValue('');
    }
  };

  const rightAnswerHandler = (e) => {
    isCorrect('true');
  };

  const wrongAnswerHandler = () => {
    isCorrect('false');
  };

  const viewHintHandler = () => {
    isHint(!hint);
  };

  return (
    <div className='terminal'>
      <div className='bar'>
        <div className='fakeButton'>
          <span className='circle' />
          <span className='circle' />
          <span className='circle' />
        </div>
        <div className='bar_description'>?????? {currentStep}</div>
      </div>
      <div className='question_description'>{questions[String(currentChapter)][currentStep - 1].description}</div>
      <pre className='terminal_guide'>
        {
          correct === 'true'
            ? questions[String(currentChapter)][currentStep - 1].terminal_guide
            : null
        }
        {
          hint === true
            ? <Hint currentChapter={currentChapter} currentStep={currentStep} />
            : null
        }
      </pre>
      <div className='input_line'>
        <input onChange={inputHandler} onKeyPress={onEnterPress} className='input' value={inputValue} placeholder='????????? ???????????? ???????????????.' autoFocus />
        <span className='hint_btn' onMouseOver={viewHintHandler} onMouseOut={viewHintHandler}>Hint</span>
        <button onClick={checkAnswerHandler} className='enter_btn'>Enter</button>
      </div>
      {
        correct === 'true'
          ? <Modal currentChapter={currentChapter} currentStep={currentStep} isCorrect={isCorrect} isOpen={rightAnswerHandler} labelOK='Continue' continueHandler={continueHandler}>
            ???????????????!
            </Modal>
          : correct === 'false'
            ? <Modal currentChapter={currentChapter} currentStep={currentStep} isCorrect={isCorrect} isOpen={wrongAnswerHandler} labelOK='Try Again'>
              ????????? ??????????????????. <br /> ?????? ?????????????????????????
              </Modal>
            : null
      }
    </div>
  );
}

export default Terminal;
