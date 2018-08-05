import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { formatCurrency } from '../helpers/currency';
import PropTypes from 'prop-types';

const Slider = ({ title, value, min, max, step, onChange }) => {
  return (
    <div className="form-group">
      <label>{title}</label>
      <div className="input-range__container">
        <InputRange
          minValue={min}
          maxValue={max}
          step={step}
          value={value}
          formatLabel={(value)=>formatCurrency('GBP', value, 0)}
          onChange={onChange}/>
      </div>
    </div>
  );
}

Slider.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number
  }),
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number
}

export default Slider;