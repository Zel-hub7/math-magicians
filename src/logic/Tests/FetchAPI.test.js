import React from 'react';
import { render, screen } from '@testing-library/react';
import Quotes from '../../Components/FetchAPI';

test('renders loading state', () => {
  render(<Quotes />);

  const loadingText = screen.queryByText(/Quote is loading.../i);
  expect(loadingText).toBeTruthy();
});

test('matches snapshot', () => {
  const { container } = render(<Quotes />);
  expect(container).toMatchSnapshot();
});
