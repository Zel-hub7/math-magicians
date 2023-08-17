import React from 'react';
import { render } from '@testing-library/react';
import CalculatorScreen from '../../Components/CalculatorScreen';

test('CalculatorScreen snapshot', () => {
  const { asFragment } = render(<CalculatorScreen value="123" />);
  expect(asFragment()).toMatchSnapshot();
});
