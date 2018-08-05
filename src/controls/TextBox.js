import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ title, onChange, value })=> {
  return (
    <div className="form-group">
      <label>{title}</label>
      <input 
        className="form-control" 
        type="text" 
        value={value}
        onChange={(e)=>onChange(e.target.value)}/>
    </div>
  )
}

TextBox.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
}

export default TextBox;