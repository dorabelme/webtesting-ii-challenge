import React from 'react';
import App from './App';

import Display from './display/display';
import Dashboard from './dashboard/dashboard';
import { render, fireEvent, getByTitle } from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";


it('renders without crashing', () => {
  render(<App />)
});

describe('renders the App Component', () => {
  render(<App />);
  const display = render(<Display />);
  const dashboard = render(<Dashboard />);

  it('App contains the sub-components', () => {
    expect(display).toBeTruthy();
    expect(dashboard).toBeTruthy();
  })
})

describe('buttons work correctly', () => {
  const display = render(<Display />);
  const dashboard = render(<Dashboard />);

  test('ball button works', () => {
    const ballButton = dashboard.getByTitle('ballBtn');
    fireEvent.click(ballButton);
    const ballCount = display.getByTitle('balls-count');
    expect(ballCount).toHaveTextContent('1');
  });

  test('strike button works', () => {
    const strikeButton = dashboard.getByTitle('strikeBtn');
    fireEvent.click(strikeButton);
    const strikeCount = display.getByTitle('strike-count');
    expect(strikeCount).toHaveTextContent('1');
  });
})