import App from './App';
import React, { useState, useEffect } from 'react';

import Display from './display/display';
import Dashboard from './dashboard/dashboard';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";

import '@testing-library/jest-dom/extend-expect';


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
  test('ball button works', () => {
    const app = render(<App />)

    const ballButton = app.getByTitle('ballBtn');
    fireEvent.click(ballButton);

    const ballCount = app.getByTitle('balls-count');
    expect(ballCount).toHaveTextContent('1 balls out of 4');
  });

  test('strike button works', () => {
    const app = render(<App />)

    const strikeButton = app.getByTitle('strikeBtn');
    fireEvent.click(strikeButton);
    const strikeCount = app.getByTitle('strikes-count');
    expect(strikeCount).toHaveTextContent('1 strikes out of 3');
  });
})