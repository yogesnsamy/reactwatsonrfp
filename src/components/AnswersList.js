import React from 'react';
import AnswerItem from './AnswerItem';

const AnswersList = ({ answers, searching, onAnswerSelect }) => {
  if (answers.length === 0 && searching === 'notyet') {
    return (
      <div className='ui positive message'>
        <div className='header'>Welcome</div>
        <p>Please enter a search term to begin.</p>
      </div>
    );
  }
  if (answers.length === 0 && searching === 'done') {
    return (
      <div className='ui negative message'>
        <div className='header'>No results found</div>
        <p>Please retry with a different search term.</p>
      </div>
    );
  }
  if (searching === 'currently') {
    return (
      <div className='ui positive message'>
        <div className='header'>Please wait</div>
        <p>Searching in progress.</p>
      </div>
    );
  }
  const renderedList = answers.map(answer => {
    return (
      <AnswerItem
        answer={answer}
        key={answer.id}
        onAnswerSelect={onAnswerSelect}
      />
    );
  });

  return <div className='ui relaxed divided list'>{renderedList}</div>;
};

export default AnswersList;
