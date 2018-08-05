import SkyPriceService from '../service/SkyPriceService';
const service = new SkyPriceService();

export const FetchFlightStatus = {
  NO_REQUEST: 'NO_REQUEST',
  BEGIN: 'BEGIN',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
}

export const fetchFlight = ()=> {
  return (dispatch, getState) => {
    dispatch(fetchFlightBegin());
    console.log("Fetch begin");
    return service
      .getFlights(getState().search)
      .then(result => dispatch(fetchFlightSuccess(getState().search, result.data)))
      .catch(error => dispatch(fetchFlightFailed(error)));
  }
}

export const FETCH_FLIGHT_BEGIN = 'FETCH_FLIGHT_BEGIN';
export const fetchFlightBegin = ()=>{
  return {
    type: FETCH_FLIGHT_BEGIN
  }
}

export const FETCH_FLIGHT_SUCCESS = 'FETCH_FLIGHT_SUCCESS';
export const fetchFlightSuccess = (search, data)=>{
  return {
    type: FETCH_FLIGHT_SUCCESS,
    search: search,
    data: data
  }
}

export const FETCH_FLIGHT_FAILED = 'FETCH_FLIGHT_FAILED';
export const fetchFlightFailed = (error)=>{
  return {
    type: FETCH_FLIGHT_BEGIN,
    error: error
  }
}