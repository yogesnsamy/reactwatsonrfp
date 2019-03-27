import React from 'react';
import AnswerItem from './AnswerItem';

const AnswersList = ({ answers }) => {
  const renderedList = answers.map(answer => {
    return <AnswerItem answer={answer} key={answer.id} />;
  });
  return <div className='ui relaxed divided list'>{renderedList}</div>;
};

export default AnswersList;
