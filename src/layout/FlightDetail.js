import React from 'react';
import PropTypes from 'prop-types';

/*
  "flight_no": "AI-207",
  "flight_name": "DEL > PNQ",
  "depart_time": "10:00 AM",
  "arrive_time": "12:00 PM",
  "date": "2018-07-30T02:10:10.000Z"
*/

const FlightDetail = ({ flight_no, flight_name, depart_time, arrive_time }) => {
  return (
    <div>
      <div className="flight-no">{flight_no}</div>
      <h3 className="flight-name">{flight_name}</h3>
      <div className="flight-time flight-depart">{depart_time}</div>
      <div className="flight-time flight-arrive">{arrive_time}</div>
    </div>
  )
};

FlightDetail.propTypes = {
  flight_no: PropTypes.string, 
  flight_name: PropTypes.string, 
  depart_time: PropTypes.string, 
  arrive_time: PropTypes.string
}

export default FlightDetail;