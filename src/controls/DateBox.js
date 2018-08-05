import React from 'react';
import { toInputTypeDateValue } from '../helpers/date';
import PropTypes from 'prop-types';

const DateBox = ({ title, onChange, value, hidden = false }) => {
  return (
    <div className={`form-group ${hidden?'hidden':''}`}>
      <label>{title}</label>
      <input 
        className="form-control" 
        type="date" 
        value={toInputTypeDateValue(value)}
        onChange={(e)=>onChange(e.target.value)}/>
    </div>
  )
}

DateBox.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(Date),
  hidden: PropTypes.bool 
}

export default DateBox;