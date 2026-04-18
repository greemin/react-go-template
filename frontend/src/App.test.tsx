import { render, screen } from '@testing-library/preact';
import App from './App';

test('app renders without crashing', () => {
  render(<App />);
  expect(screen.getByRole('heading')).toBeInTheDocument();
});
