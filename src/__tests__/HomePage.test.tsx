import React from 'react';
import { render } from '@testing-library/react';
import HomePage from 'pages/HomePage';

test('renders correctly and matches snapshot', () => {
  const { asFragment } = render(<HomePage />);
  expect(asFragment()).toMatchSnapshot();
});
