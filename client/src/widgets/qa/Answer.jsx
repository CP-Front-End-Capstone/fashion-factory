/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable camelcase */
import React from 'react';
import Report from './Report.jsx';
import Helpful from './Helpful.jsx';

const Answer = (props) => {
  const { answer } = props;
  const { body, date, answerer_name } = answer;
  return (
    <>
      <div className="row text-left">
        <div className="col h4">
          A: <span className="h6 font-weight-light">{body}</span>
        </div>
      </div>
      <div className="row text-left">
        <div className="col h6 font-weight-light">
          <span className="text-muted">
            by {answerer_name} {(new Date(date)).toDateString().slice(4)} |
          </span>
          <Helpful input={answer} />
        </div>
      </div>
    </>
  );
};

export default Answer;
