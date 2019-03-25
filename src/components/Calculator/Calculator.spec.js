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