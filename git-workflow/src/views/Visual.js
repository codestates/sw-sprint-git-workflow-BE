import React from 'react';
import './Visual.css';
import Ch1 from '../chapters/Ch1';
import Ch2 from '../chapters/Ch2';
import Ch3 from '../chapters/Ch3';

function Visual (props) {
  const currentChapter = Number(props.currentChapter);
  const currentStep = Number(props.currentStep);

  window.addEventListener('load', (e) => {
    const scale = document.documentElement.clientHeight / 900;
    document.querySelector('.visual_container').style.cssText = `zoom: ${scale}`;
  });

  window.addEventListener('resize', (e) => {
    const scale = document.documentElement.clientHeight / 900;
    document.querySelector('.visual_container').style.cssText = `zoom: ${scale}`;
  });

  return (
    <>
      {
      currentChapter === 1
        ? <Ch1 currentStep={currentStep} />
        : currentChapter === 2
          ? <Ch2 currentStep={currentStep} />
          : currentChapter === 3
            ? <Ch3 currentStep={currentStep} />
              : null
    }
    </>
  );
}

export default Visual;
