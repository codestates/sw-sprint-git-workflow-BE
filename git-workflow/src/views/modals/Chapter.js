import React from 'react';
import './Chapter.css';
import questions from '../../questions.json';
import { useHistory } from 'react-router-dom';

function Chapter () {
  const history = useHistory();

  const chapter = () => {
    const chapterList = [];
    for (const key in questions) {
      chapterList.push(<div className='chapter_list' onClick={moveChapterHandler}>{questions[key][0].chapter}</div>);
    }
    return chapterList;
  };

  const moveChapterHandler = (e) => {
    const moveChapter = e.target.textContent.slice(0, 1);
    history.push(`/chapter${moveChapter}/1`);
  };

  return (
    <>
      <div className='chapter_modal'>
        {chapter()}
      </div>
    </>
  );
}

export default Chapter;
