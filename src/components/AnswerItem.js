// import './VideoItem.css';
import React from 'react';

const AnswerItem = ({ answer }) => {
  return (
    <div className='ui positive raised message'>
      <div className='ui relaxed divided list'>
        <div className='item'>
          <div className='content'>
            <p className='header'> {answer.question}</p>
            <div className='ui label right'>
              Confidence
              <div className='detail'>
                {answer.result_metadata.confidence.toFixed(2)}
              </div>
            </div>
            <div className='ui label'>
              Score
              <div className='detail'>
                {answer.result_metadata.score.toFixed(2)}
              </div>
            </div>
          </div>
        </div>

        <p>{answer.answer}</p>
      </div>
    </div>
  );
};

export default AnswerItem;
