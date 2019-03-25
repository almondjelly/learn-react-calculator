import React, { Component } from 'react';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import './Calculator.css';

class Calculator extends Component {
  state = {
    displayValue: '0',    // inputed or computed value to be displayed in <Display />
    numbers: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '.', '0', 'ce'],          // array of strings used for the number keys in <Keys />
    operators: ['/', '*', '-', '+'],        // array of strings used for the operator keys in <Keys />
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
    const { 
      displayValue,
      numbers,
      operators
    } = this.state;

    return (
      <div className="calculator-container">
        <Display displayValue={displayValue} />
        <Keypad
          numbers={numbers}
          operators={operators}
          callOperator={this.callOperator}
          setOperator={this.setOperator}
          updateDisplay={this.updateDisplay}
        />
      </div>
    );
  }
}

export default Calculator;