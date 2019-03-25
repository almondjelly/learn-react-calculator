import React from 'react';
import PropTypes from 'prop-types';
import Key from '../Key/Key'
import './Keypad.css';

const Keypad = ({ 
  numbers,
  operators,
  callOperator,
  setOperator,
  updateDisplay
}) => {
  const numberKeys = numbers.map(number => (
    <Key
      key={number}
      keyAction={updateDisplay}
      keyType="number-key"
      keyValue={number}
    />
  ));

  const operatorKeys = operators.map(operator => (
    <Key
      key={operator}
      keyAction={updateDisplay}
      keyType="operator-key"
      keyValue={operator}
    />
  ));
 
  return(
    <div className="keypad-container">
      <div className="numbers-container">
        { numberKeys }
      </div>
      <div className="operators-container">
        { operatorKeys }
      </div>
      <div className="submit-container">    
        <Key
          keyAction={callOperator}
          keyType='submit-key'
          keyValue='='
        />
      </div>
    </div>
  );
};

Keypad.propTypes = {
  numbers: PropTypes.array.isRequired,
  operators: PropTypes.array.isRequired,
  callOperator: PropTypes.func.isRequired,
  setOperator: PropTypes.func.isRequired,
  updateDisplay: PropTypes.func.isRequired,
}

export default Keypad;