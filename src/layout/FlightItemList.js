import React from 'react';
import FlightItem from './FlightItem';
import IMG1 from '../img/1.png';
import IMG2 from '../img/2.png';
import IMG3 from '../img/3.png';
import PropTypes from 'prop-types';
import { FlightTypes } from '../actions/searchActions';

const IMGS = [ IMG1, IMG2, IMG3 ];

const FlightItemList = ({ items = [], type }) => {
  return (
    <div>
      {
        items.map((item)=><FlightItem key={item.flight_id} img={IMGS[item.flight_id%IMGS.length]} {...item} type={type}/>)
      }
    </div>
  )
};

FlightItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.oneOf([FlightTypes.ONEWAY, FlightTypes.RETURN])
}

export default FlightItemList;