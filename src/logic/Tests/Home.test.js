import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../Components/Home';

test('should match Home componet snapshot', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});
