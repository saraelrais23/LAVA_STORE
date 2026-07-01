import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

beforeAll(() => {
  window.scrollTo = jest.fn();
});

test('renders the storefront shell', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getAllByText(/LAVA/i).length).toBeGreaterThan(0);
});
