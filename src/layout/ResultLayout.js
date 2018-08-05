import React from 'react';
import PropTypes from 'prop-types';
import { FetchFlightStatus } from '../actions/flightActions';
import ResultStart from './ResultStart';
import ResultBegin from './ResultBegin';
import ResultSuccess from './ResultSuccess';
import ResultFailed from './ResultFailed';
import '../styles/Result.css'

const ResultLayout = ({ flights, search, status }) => {

  const getResultComponent = ()=> {
    switch(status) {

      case FetchFlightStatus.BEGIN:
        return <ResultBegin/>;
      
      case FetchFlightStatus.SUCCESS:
        return <ResultSuccess search={search} flights={flights}/>
        
      case FetchFlightStatus.FAILED:
        return <ResultFailed/>;

      default:
        return <ResultStart/>;
    }
  }

  return (
    <div className="result-layout">
      { getResultComponent() }
    </div>
  )
}

ResultLayout.propTypes = {
  flights: PropTypes.arrayOf(PropTypes.object), 
  search: PropTypes.object, 
  status: PropTypes.oneOf([
    FetchFlightStatus.NO_REQUEST, 
    FetchFlightStatus.BEGIN, 
    FetchFlightStatus.SUCCESS, 
    FetchFlightStatus.FAILED
  ])
}

export default ResultLayout;