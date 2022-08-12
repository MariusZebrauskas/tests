import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

it('display inputs and login button', () => {
  render(<Login />);
  const usernameEl = screen.getByPlaceholderText('Username');
  const passwordEl = screen.getByPlaceholderText('Password');
  const loginEl = screen.getByRole('button', {
    name: 'Login',
  });

  expect(passwordEl).toBeVisible();


});
