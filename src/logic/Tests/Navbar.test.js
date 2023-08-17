import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../../Components/NavBar';

test('renders navigation links correctly', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
  
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Calculator/i)).toBeInTheDocument();
    expect(screen.getByText(/Quotes/i)).toBeInTheDocument();
  });
  
  test('matches snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
  
    expect(container).toMatchSnapshot();
  });