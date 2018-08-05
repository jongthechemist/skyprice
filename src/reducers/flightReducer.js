import {
  FetchFlightStatus,
  FETCH_FLIGHT_BEGIN,
  FETCH_FLIGHT_FAILED,
  FETCH_FLIGHT_SUCCESS,
} from '../actions/flightActions';

const defaultFlight = {
  search: null,
  error: null,
  status: FetchFlightStatus.NO_REQUEST,
  flights: []
}

const flightReducer = (state = defaultFlight, action) => {
  console.log(action);
  switch(action.type) {

    case FETCH_FLIGHT_BEGIN:
      return Object.assign({}, state, {
        status: FetchFlightStatus.BEGIN,
        flights: [],
        search: null
      });
    
    case FETCH_FLIGHT_SUCCESS:
      return Object.assign({}, state, {
        search: action.search,
        status: FetchFlightStatus.SUCCESS,
        flights: action.data
      })
    
    case FETCH_FLIGHT_FAILED:
      return Object.assign({}, state, {
        status: FetchFlightStatus.FAILED,
        error: action.error
      })
    
    default:
      return state;
  }
};

export default flightReducer;