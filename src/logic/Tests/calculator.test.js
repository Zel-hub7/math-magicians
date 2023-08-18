import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../../Components/calculator';

test('performs addition', () => {
  const { getByText, queryByText } = render(<Calculator />);

  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));

  const display = queryByText('3');
  expect(display).toBeTruthy();
});

test('matches snapshot', () => {
  const { container } = render(<Calculator />);
  expect(container).toMatchSnapshot();
});
