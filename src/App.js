import React from 'react';
import './styles/App.css';
import SearchContainer from './layout/SearchContainer';
import ResultContainer from './layout/ResultContainer';
import HeaderLayout from './layout/HeaderLayout';
import PropTypes from 'prop-types';

const App = ()=> {
  return (
    <div className="App">
      <header className="App-header container-fluid">
        <HeaderLayout/>
      </header>
      <div className="App-body container">
        <div className="row">
          <div className="col-lg-3">
            <SearchContainer/>
          </div>
          <div className="col-lg-9 result-container">
            <ResultContainer/>
          </div>
        </div>
      </div>
    </div>
  );
}

App.contextTypes = {
  store: PropTypes.object
};

export default App;
