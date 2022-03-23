import { render, screen } from '@testing-library/react';
import App from './App';

test('renders rental', () => {
  render(<App />);
  const linkElement = screen.getByText(/rental/i);
  expect(linkElement).toBeInTheDocument();
});
