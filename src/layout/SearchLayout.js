import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Search.css';
import Tabs from '../controls/Tabs';
import TextBox from '../controls/TextBox';
import DateBox from '../controls/DateBox';
import CounterBox from '../controls/CounterBox';
import Button from '../controls/Button';
import Slider from '../controls/Slider';
import { SearchParameters, FlightTypes } from '../actions/searchActions';

const SearchLayout = (props) => {
  const { onParameterChanged, onSearchSubmit } = props;
  return (
    <div className="search-layout">
      <Tabs 
        items={Object.values(FlightTypes)} 
        value={props[SearchParameters.FLIGHT_TYPE]} 
        onChange={(value)=>onParameterChanged(SearchParameters.FLIGHT_TYPE, value)}/>
      <form className="search-form">
        <TextBox 
          title="From" 
          value={props[SearchParameters.FROM_LOCATION]} 
          onChange={(value)=>onParameterChanged(SearchParameters.FROM_LOCATION, value)}/>
        <TextBox 
          title="Destination"
          value={props[SearchParameters.DESTINATION_LOCATION]} 
          onChange={(value)=>onParameterChanged(SearchParameters.DESTINATION_LOCATION, value)}/>
        <DateBox 
          title="Departure Date"
          value={props[SearchParameters.DEPARTURE_DATE]} 
          onChange={(value)=>onParameterChanged(SearchParameters.DEPARTURE_DATE, new Date(value))}/>
        <DateBox 
          hidden={props[SearchParameters.FLIGHT_TYPE] === FlightTypes.ONEWAY}
          title="Return Date"
          value={props[SearchParameters.RETURN_DATE]} 
          onChange={(value)=>onParameterChanged(SearchParameters.RETURN_DATE, new Date(value))}/>
        <CounterBox 
          title="Passengers"
          value={props[SearchParameters.PASSENGER_COUNT]} 
          onChange={(value)=>onParameterChanged(SearchParameters.PASSENGER_COUNT, value)}/>
        <Button block onClick={()=>{onSearchSubmit()}}>Search</Button>
      </form>
      <form className="search-form">
        <Slider 
          title="Refine Flight Search" 
          min={0} 
          max={200} 
          step={10} 
          value={{ min: props[SearchParameters.MIN_PRICE], max: props[SearchParameters.MAX_PRICE] }}
          onChange={(value)=> {
            if(value.min !== props[SearchParameters.MIN_PRICE]) onParameterChanged(SearchParameters.MIN_PRICE, value.min);
            if(value.max !== props[SearchParameters.MAX_PRICE]) onParameterChanged(SearchParameters.MAX_PRICE, value.max);
          }}/>
      </form>
    </div>
  )
}

SearchLayout.propTypes = {
  onParameterChanged: PropTypes.func, 
  onSearchSubmit: PropTypes.func,
  [SearchParameters.FLIGHT_TYPE]: PropTypes.oneOf([FlightTypes.ONEWAY, FlightTypes.RETURN]),
  [SearchParameters.FROM_LOCATION]: PropTypes.string,
  [SearchParameters.DESTINATION_LOCATION]: PropTypes.string,
  [SearchParameters.DEPARTURE_DATE]: PropTypes.instanceOf(Date),
  [SearchParameters.RETURN_DATE]: PropTypes.instanceOf(Date),
  [SearchParameters.PASSENGER_COUNT]: PropTypes.number,
  [SearchParameters.MIN_PRICE]: PropTypes.number,
  [SearchParameters.MAX_PRICE]: PropTypes.number
}

export default SearchLayout;