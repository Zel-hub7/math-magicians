import React from 'react';
import { render,screen } from '@testing-library/react';
import Quotes from '../../Components/FetchAPI';


test('renders loading state', () => {
    render(<Quotes />);
  
    const loadingText = screen.getByText(/Quote is loading.../i);
    expect(loadingText).toBeInTheDocument;
  });


test('matches snapshot', () => {
  const { container } = render(<Quotes />);
  expect(container).toMatchSnapshot();
});
