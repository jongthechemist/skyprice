import { 
  UPDATE_SEARCH, 
  SUBMIT_SEARCH, 
  FlightTypes
} from '../actions/searchActions';

const defaultSearch = {
  from_location: "Kuching",
  destination_location: "Kuala Lumpur",
  departure_date: new Date(),
  return_date: new Date(),
  passenger_count: 1,
  min_price: 0,
  max_price: 200,
  flight_type: FlightTypes.RETURN,
  'mocky-delay': '1000ms'
}

const searchReducer = (state = defaultSearch, action) => {
  switch(action.type) {
    case UPDATE_SEARCH :
      return Object.assign({ }, state, { 
        [action.parameter]: action.value 
      });

    case SUBMIT_SEARCH :
      return state;
      
    default:
      return state;
  }
};

export default searchReducer;