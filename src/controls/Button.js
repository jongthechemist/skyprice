import React from 'react';
import PropTypes from 'prop-types';

const Button = ({onClick, block, children})=> {
  return (
    <button onClick={onClick} className={`btn btn-primary ${!!block && 'btn-block'}`} type="button">{children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  block: PropTypes.bool,
  onClick: PropTypes.func
}

export default Button;