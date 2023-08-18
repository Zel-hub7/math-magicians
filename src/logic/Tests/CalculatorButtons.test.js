import React from 'react';
import { render } from '@testing-library/react';
import CalculatorButtons from '../../Components/CalculatorButtons';

test('CalculatorButtons snapshot', () => {
  const { asFragment } = render(<CalculatorButtons onButtonClick={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});
