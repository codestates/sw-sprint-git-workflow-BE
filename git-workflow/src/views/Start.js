import React from 'react';
import './Start.css';
import logo from '../logo.png';
import { useHistory } from 'react-router-dom';

function Start () {
  const history = useHistory();
  const quizStartHandler = () => {
    history.push('/chapter1/1');
  };

  return (
    <div className='start_body'>
      <div className='logo'><img src={logo} alt='logo' className='logoImg' /></div>
      <h1>Git Commands <br /> Checkpoint</h1>
      <div className='start_description'>
        Git Commands 체크포인트에 오신 것을 환영합니다!<br />
        터미널에 적힌 설명의 상황에 맞게 필요한 Git 명령어를 입력해주세요.
      </div>
      <button className='start_btn' onClick={quizStartHandler}>START</button>
    </div>
  );
}

export default Start;
