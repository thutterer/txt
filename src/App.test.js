import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders "add" button', () => {
  const { getByRole } = render(<App />);
  const addButton = getByRole('button');
  expect(addButton).toBeVisible();
});

test('focuses "add" button', () => {
  const { getByRole } = render(<App />);
  const addButton = getByRole('button');
  expect(addButton).toHaveFocus();
});
