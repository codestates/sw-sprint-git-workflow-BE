import React from 'react';
import './End.css';
import logo from '../logo.png';

function End () {
  const retryHandler = () => {
    // window.location.href = 'http://localhost:3000/';
    window.location.href = 'https://codestates.github.io/sw-sprint-git-workflow/';
  };

  return (
    <>
      <div className='end_body'>
        <div className='logo'><img src={logo} alt='logo' className='logoImg' /></div>
        <div className='ending_title'>Git job!</div>
        <div className='start_description'>
          수고하셨습니다.<br />
          Git Commands 체크포인트 문제가 끝났습니다!<br />
          다시 풀어보시려면 Retry 버튼을 클릭하세요.
        </div>
        <button onClick={retryHandler} className='retry_button'>Retry</button>
      </div>
    </>
  );
}

export default End;
