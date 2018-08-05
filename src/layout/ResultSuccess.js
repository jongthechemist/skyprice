import React from 'react';
import PropTypes from 'prop-types';
import ResultSearchDetail from './ResultSearchDetail';
import FlightItemList from './FlightItemList';

const ResultSuccess = ({ search, flights }) => {
  return (
    <div>
      <h1>Your Results</h1>
      <ResultSearchDetail {...search}/>
      <FlightItemList items={flights} type={search.flight_type}/>
    </div>
  )
}

ResultSuccess.propTypes = {
  search: PropTypes.object,
  flights: PropTypes.arrayOf(PropTypes.object)
}

export default ResultSuccess;