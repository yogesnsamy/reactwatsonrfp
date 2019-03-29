// import './VideoItem.css';
import React from 'react';
const AnswerItem = ({ answer, onAnswerSelect }) => {
  return (
    <div className='ui positive raised message'>
      <div className='ui relaxed divided list'>
        <div className='item'>
          <div className='content'>
            <p className='header'> {answer.question}</p>
            <div className='ui horizontal list'>
              <div className='item'>
                <div className='content description'>
                  Confidence: {answer.result_metadata.confidence.toFixed(2)}
                </div>
              </div>
              <div className='item'>
                <div className='content description'>
                  Score: {answer.result_metadata.score.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>{answer.answer}</p>
        <button
          className='tiny ui button'
          onClick={() => onAnswerSelect(answer)}
        >
          Copy answer
        </button>
      </div>
    </div>
  );
};

export default AnswerItem;
