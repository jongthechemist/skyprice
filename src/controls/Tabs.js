import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ items, value, onChange }) => {
  return (
    <div>
      <ul className="nav nav-tabs nav-fill">
        {
          items.map((item)=> (
            <li key={item} className="nav-item">
              <a className={`nav-link ${value===item && 'active'}`} onClick={()=>onChange(item)}>{item}</a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

Tab.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default Tab;