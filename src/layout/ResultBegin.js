import React from 'react';
import logo from '../logo.svg';

const ResultBegin = () => {
  return (
    <div className="result-message">
      <h1>
        Looking for the best flights...
      </h1>
      <img className="App-logo" src={logo} alt="logo"/>
    </div>
  )
}

export default ResultBegin;