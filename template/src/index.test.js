import { render, screen } from '@testing-library/react';
import Button from './components/Button';

test('renders learn react link', () => {
  render(<Button label="My Button" />);
  const linkElement = screen.getByText(/My Button/i);
  expect(linkElement).toBeInTheDocument();
});