import React from 'react';
import { render } from '@testing-library/react';
import HomePage from 'pages/user/HomePage'


test('renders correctly and matches snapshot', () => {
  const { asFragment } = render(<MyComponent />);
  expect(asFragment()).toMatchSnapshot();
});
