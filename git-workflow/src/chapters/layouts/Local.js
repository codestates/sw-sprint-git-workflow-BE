import React from 'react';

function Local (props) {
  return (
    <div className={`${props.effect} ${props.ch3} local`}>
      <div className='visual_sub_title'>Local</div>
      <div className='area_box_container'>
        {props.localStatus === 'true'
          ? <>
            {props.ch3
              ? <div className='area_box commit_ch3' /> : <div className='area_box commit' />}
            <div className='layout'>
              <div className='left'>
                <div className='area_box staging'>
                  <span className='visual_third_title'>staging area</span>
                </div>
                <div className='area_box untracked'>
                  <span className='visual_third_title'>untracked files</span>
                </div>
              </div>
              <div className='right'>
                <div className='area_box stash'>
                  <span className='visual_third_title'>stash</span>
                </div>
              </div>
            </div>
          </>
          : null}
      </div>
    </div>
  );
}

export default Local;
