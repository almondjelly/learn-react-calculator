import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

describe('Calculator', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Calculator />));

  it('should render correctly', () =>
    expect(wrapper).toMatchSnapshot()
  );
  
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
  
  it('should render the Display component', () => {
    expect(wrapper.containsMatchingElement(
      <Display displayValue={wrapper.instance().state.displayValue} />
    )).toEqual(true);
  });

  it('should render the Keypad components', () => {
    expect(wrapper.containsMatchingElement(
      <Keypad
        numbers={wrapper.instance().state.numbers}
        operators={wrapper.instance().state.operators}
        callOperator={wrapper.instance().callOperator}
        setOperator={wrapper.instance().setOperator}
        updateDisplay={wrapper.instance().updateDisplay}
      />
    )).toEqual(true);
  });

});

describe('updateDisplay', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Calculator />));

  it('updates displayValue', () => {
    wrapper.instance().updateDisplay('2');
    expect(wrapper.state('displayValue')).toEqual('2');
  });

  it('concatenates displayValue', () => {
    wrapper.instance().updateDisplay('2');
    wrapper.instance().updateDisplay('4');
    expect(wrapper.state('displayValue')).toEqual('24');
  });

  it('removes leading zero from displayValue', () => {
    wrapper.instance().updateDisplay('0');
    wrapper.instance().updateDisplay('2');
    expect(wrapper.state('displayValue')).toEqual('2');
  });

  it('prevents multiple leading zeros from displayValue', () => {
    wrapper.instance().updateDisplay('0');
    wrapper.instance().updateDisplay('0');
    expect(wrapper.state('displayValue')).toEqual('0');
  });

  it('clears the last character of displayValue', () => {
    wrapper.instance().updateDisplay('2');
    wrapper.instance().updateDisplay('4');
    wrapper.instance().updateDisplay('ce');
    expect(wrapper.state('displayValue')).toEqual('2');
  });

  it('prevents multiple instances of decimal in displayValue', () => {
    wrapper.instance().updateDisplay('.');
    wrapper.instance().updateDisplay('.');
    expect(wrapper.state('displayValue')).toEqual('.');
  });

  it('sets displayValue to zero if displayValue is an empty string', () => {
    wrapper.instance.updateDisplay('ce');
    expect(wrapper.state('displayValyue')).toEqual('0');
  });
});