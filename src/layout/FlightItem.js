import React from 'react';
import PropTypes from 'prop-types';
import FlightDetail from './FlightDetail';
import Button from '../controls/Button';
import { FlightTypes } from '../actions/searchActions';
import { formatCurrency } from '../helpers/currency';

/*
  "flight_id": "111",
  "departure_flight": {},
  "arrival_flight": {},
  "price": "125.00"
*/

const FlightItem = ({ img, departure_flight, arrival_flight, price, currency = 'GBP', type = FlightTypes.RETURN }) => {

  return (
    <div className="card flight-card">
      <div className="card-body">
        <div className="row">
          <div className="col-3">
            <img className="card-img" src={img} alt="flight"></img>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col flex-column-center">
                    <FlightDetail {...departure_flight}/>
                  </div>
                  {
                    type === FlightTypes.RETURN &&
                    <div className="col flex-column-center">
                      <FlightDetail {...arrival_flight}/>
                    </div>
                  }
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-6 flex-column-center">
                    <h3 className="flight-price">{formatCurrency(currency, price)}</h3>
                  </div>
                  <div className="col-6 flex-column-center">
                    <Button block>Select this flight</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

FlightItem.propTypes = {
  img: PropTypes.string, 
  departure_flight: PropTypes.object, 
  arrival_flight: PropTypes.object, 
  price: PropTypes.string, 
  currency: PropTypes.string, 
  type: PropTypes.oneOf([FlightTypes.ONEWAY, FlightTypes.RETURN])
}

export default FlightItem;