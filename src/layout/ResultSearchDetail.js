import React from 'react';
import PropTypes from 'prop-types';
import { toMomentFormat } from '../helpers/date';

const DISPLAY_FORMAT = "Do MMM YYYY";

const ResultSearchDetail = ({ departure_date, return_date }) => {
  return (
    <div className="result-search-detail">
      <div className="row">
        <div className="col-2 label">Depart:</div>
        <div className="col-10">{toMomentFormat(departure_date, DISPLAY_FORMAT)}</div>
      </div>
      <div className="row">
        <div className="col-2 label">Return:</div>
        <div className="col-10">{toMomentFormat(return_date, DISPLAY_FORMAT)}</div>
      </div>
    </div>
  )
}

ResultSearchDetail.propTypes = {
  departure_date: PropTypes.instanceOf(Date),
  return_date: PropTypes.instanceOf(Date)
}

export default ResultSearchDetail;