import React from 'react';
import { render, screen } from '@testing-library/react'
import App from './App';

it('renders OK string', () => {
  render(<App />);
  expect(screen.getByText('OK')).toBeInTheDocument();
});
