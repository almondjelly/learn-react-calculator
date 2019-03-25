import React from 'react';
import PropTypes from 'prop-types';
import './Keypad.css';

const Keypad = ({ 
  numbers,
  operators,
  callOperator,
  setOperator,
  updateDisplay
}) =>
  <div className="keypad-container">
        
  </div>
;

Keypad.propTypes = {
  numbers: PropTypes.array.isRequired,
  operators: PropTypes.array.isRequired,
  callOperator: PropTypes.func.isRequired,
  setOperator: PropTypes.func.isRequired,
  updateDisplay: PropTypes.func.isRequired,
}

export default Keypad;