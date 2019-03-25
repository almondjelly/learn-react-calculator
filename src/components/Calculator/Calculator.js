import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  state = {
    displayValue: '0',    // inputed or computed value to be displayed in <Display />
    numbers: [],          // array of strings used for the number keys in <Keys />
    operators: [],        // array of strings used for the operator keys in <Keys />
    selectedOperator: '', // operator selected for math operation held in memory
    storedValue: '',      // inputed or computed value to use for math operation
  }

  // Updates and renders the displayed value to the DOM
  updateDisplay = () => {
    console.log('update display');
  }

  // Saves the chosen operator to the component state object
  setOperator = () => {
    console.log('set operation');
  }

  // Handles math operations
  callOperator = () => {
    console.log('call operation');
  }

  render() {
    return (
      <div className="calculator-container" />
    );
  }
}

export default Calculator;