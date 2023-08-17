import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../../Components/NavBar';

test('renders navigation links correctly', () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>,
  );

  expect(screen.queryByText(/Home/i)).toBeTruthy();
  expect(screen.queryByText(/Calculator/i)).toBeTruthy();
  expect(screen.queryByText(/Quotes/i)).toBeTruthy();
});

test('matches snapshot', () => {
  const { container } = render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>,
  );

  expect(container).toMatchSnapshot();
});
