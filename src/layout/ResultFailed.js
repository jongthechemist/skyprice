import React from 'react';
import sorry from '../img/sorry.jpg';

const ResultFailed = () => {
  return (
    <div className="result-message">
      <h1>
        <img className="sorry" src={sorry} alt="Sincere apology"/>
        <br/>
        Something went wrong...
        <br/>
        Please report to us so we can look at it.
      </h1>
    </div>
  )
}

export default ResultFailed;