import React from 'react';
import PropTypes from 'prop-types';

const CounterBox = ({title, onChange, value}) => {
  return (
    <div className="form-group">
      <label>{title}</label>
      <input 
        className="form-control" 
        type="number" 
        value={value}
        onChange={(e)=>onChange(Number(e.target.value))}/>
    </div>
  )
}

CounterBox.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number
}

export default CounterBox;