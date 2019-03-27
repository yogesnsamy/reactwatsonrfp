// import './VideoItem.css';
import React from 'react';

const AnswerItem = ({ answer }) => {
  return (
    <div className='video-item item'>
      <div className='ui list'>
        <div className='item'>
          <div className='header'>{answer.question}</div>
          {answer.answer}
        </div>
      </div>
    </div>
  );
};

export default AnswerItem;
