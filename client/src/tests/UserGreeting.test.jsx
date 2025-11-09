import { render, screen } from '@testing-library/react';
import UserGreeting from '../components/UserGreeting';

test('shows guest when no name', () => {
  render(<UserGreeting />);
  expect(screen.getByTestId('guest').textContent).toContain('Guest');
});

test('greets by name', () => {
  render(<UserGreeting name="Ada" />);
  expect(screen.getByTestId('greet').textContent).toContain('Ada');
});