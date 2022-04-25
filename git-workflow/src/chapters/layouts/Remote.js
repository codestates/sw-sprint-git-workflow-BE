import React from 'react';
import Repository from './Repository';

function Remote (props) {
  const renderByType = (option) => {
    switch (option) {
      case 'true':
        return (
          <>
            <Repository title='pair' />
            <Repository title='origin' />
          </>
        );
      case 'origin-only':
        return <Repository title='origin' />;
      case 'project':
        return (
          <>
            <Repository title='project' />
            <Repository title='origin' />
          </>
        )
    }
  };
  return (
    <>
      <div className={`${props.effect} ${props.ch3} remote`}>
        <div className='visual_sub_title'>Remote</div>
        <div className='area_box_container'>
          {
            renderByType(props.remoteStatus)
          }
        </div>
      </div>
      <hr />
    </>
  );
}

export default Remote;
