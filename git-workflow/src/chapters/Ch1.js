import React from 'react';
import '../views/Visual.css';
import Remote from './layouts/Remote';
import Local from './layouts/Local';
import ch1_2 from '../imgs/ch1/ch1_2.svg';
import ch1_3 from '../imgs/ch1/ch1_3.svg';
import ch1_4_1 from '../imgs/ch1/ch1_4_1.svg';
import ch1_4_2 from '../imgs/ch1/ch1_4_2.svg';
import ch1_5_1 from '../imgs/ch1/ch1_5_1.svg';
import ch1_5_2 from '../imgs/ch1/ch1_5_2.svg';
import ch1_6 from '../imgs/ch1/ch1_6.svg';
import ch1_7_1 from '../imgs/ch1/ch1_7_1.svg';
import ch1_7_2 from '../imgs/ch1/ch1_7_2.svg';
import ch1_8_1 from '../imgs/ch1/ch1_8_1.svg';
import ch1_8_2 from '../imgs/ch1/ch1_8_2.svg';
import ch1_9_1 from '../imgs/ch1/ch1_9_1.svg';
import ch1_9_2 from '../imgs/ch1/ch1_9_2.svg';
import ch1_10 from '../imgs/ch1/ch1_10.svg';

function Ch1 (props) {
  const currentStep = props.currentStep;

  return (
    <div className='visual_container'>
      {
        currentStep === 1
          ? <>

          </>
          : currentStep === 2
            ? <>
              <img src={ch1_2} className='svg show_commit' alt='git' />
              <Remote effect='show_commit' remoteStatus='origin-only' />
              <Local effect='show_commit' localStatus='false' />
            </>
            : currentStep === 3
              ? <>
                <img src={ch1_3} className='svg show_commit' alt='git' />
                <Remote remoteStatus='origin-only' />
                <Local localStatus='true' effect='show_commit' />
              </>
              : currentStep === 4
                ? <>
                  <img src={ch1_4_1} className='svg' alt='git' />
                  <img src={ch1_4_2} className='svg show_commit' alt='git' />
                  <Remote remoteStatus='origin-only' className='show_commit' />
                  <Local localStatus='true' />
                </>
                : currentStep === 5
                  ? <>
                    <img src={ch1_5_1} className='svg' alt='git' />
                    <img src={ch1_5_2} className='svg show_commit' alt='git' />
                    <Remote remoteStatus='origin-only' className='show_commit' />
                    <Local localStatus='true' />
                  </>
                  : currentStep === 6
                    ? <>
                      <img src={ch1_6} className='svg' alt='git' />
                      <Remote remoteStatus='origin-only' />
                      <Local localStatus='true' />
                    </>
                    : currentStep === 7
                      ? <>
                        <img src={ch1_7_1} className='svg' alt='git' />
                        <img src={ch1_7_2} className='svg show_commit' alt='git' />
                        <Remote remoteStatus='origin-only' />
                        <Local localStatus='true' />
                      </>
                      : currentStep === 8
                        ? <>
                          <img src={ch1_8_1} className='svg' alt='git' />
                          <img src={ch1_8_2} className='svg show_commit' alt='git' />
                          <Remote remoteStatus='origin-only' />
                          <Local localStatus='true' />
                        </>
                        : currentStep === 9
                          ? <>
                            <img src={ch1_9_1} className='svg' alt='git' />
                            <img src={ch1_9_2} className='svg show_commit' alt='git' />
                            <Remote remoteStatus='origin-only' />
                            <Local localStatus='true' />
                            </>
                          : currentStep === 10
                            ? <>
                              <img src={ch1_10} className='svg' alt='git' />
                              <Remote remoteStatus='origin-only' />
                              <Local localStatus='true' />
                              </>
                            : null
      }
    </div>
  );
}

export default Ch1;
