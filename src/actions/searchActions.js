import { fetchFlight } from './flightActions';

export const FlightTypes = {
  ONEWAY: 'One-Way',
  RETURN: 'Return'
}

export const SearchParameters = {
  FROM_LOCATION: 'from_location',
  DESTINATION_LOCATION: 'destination_location',
  DEPARTURE_DATE: 'departure_date',
  RETURN_DATE: 'return_date',
  PASSENGER_COUNT: 'passenger_count',
  MIN_PRICE: 'min_price',
  MAX_PRICE: 'max_price',
  FLIGHT_TYPE: 'flight_type'
}

export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const updateSearch = (parameter, value) => {
  return {
    type: UPDATE_SEARCH,
    parameter: parameter,
    value: value
  }
}

export const SUBMIT_SEARCH = 'SUBMIT_SEARCH';
export const submitSearch = () => {
  return fetchFlight();
}