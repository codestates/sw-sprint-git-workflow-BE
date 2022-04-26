import React from 'react';
import Nav from './views/Nav';
import Visual from './views/Visual';
import Terminal from './views/Terminal';
import { useParams } from 'react-router-dom';

function Container () {
  const { chapter, number } = useParams();

  const style = { flex: '1 0 auto', display: 'flex', flexDirection: 'column', maxWidth: 'calc(100% - 200px)' };

  return (
    <div id='container'>
      <Nav currentChapter={chapter} currentStep={number} />
      <div style={style}>
        <Visual currentChapter={chapter} currentStep={number} />
        <Terminal currentChapter={chapter} currentStep={number} />
      </div>
    </div>
  );
}

export default Container;
