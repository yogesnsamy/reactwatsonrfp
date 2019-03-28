// import './VideoItem.css';
import React from 'react';

const AnswerItem = ({ answer }) => {
  return (
    <div className='ui raised segment'>
      <div className='ui relaxed divided list'>
        <div className='item'>
          <div className='content'>
            <p className='header'> {answer.question}</p>
            <div class='ui label'>
              Confidence
              <div class='detail'>
                {answer.result_metadata.confidence.toFixed(2)}
              </div>
            </div>
            <div class='ui label'>
              Score
              <div class='detail'>
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
