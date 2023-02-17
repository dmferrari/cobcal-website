import React from 'react';
import { render } from '@testing-library/react';
import Loading from '../../components/loading/'

describe('Loading component', () => {
  test('renders correctly', () => {
    const { container } = render(<Loading />);
    expect(container.querySelector('span')).toHaveTextContent('Loading...');
    expect(container.querySelector('svg')).toHaveAttribute('role', 'status');
  });
});