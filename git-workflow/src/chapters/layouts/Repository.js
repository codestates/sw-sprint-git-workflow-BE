import React from 'react';

function Repository (props) {
  return (
    <>
      <div className={`area_box ${props.title}`}>
        <div className='visual_third_title'>{props.title}</div>
      </div>
    </>
  );
}

export default Repository;
