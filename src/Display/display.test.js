import React from 'react';

import { render, fireEvent, getByTitle } from '@testing-library/react';
import Display from './Display';
import "@testing-library/react/cleanup-after-each";


it('renders without crashing', () => {
    render(<Display />)
});

describe('display tests', () => {
    const display = render(<Display />)
    const ballCount = display.getByTitle('balls-count');
    expect(ballCount).toHaveTextContent('0');
    const strikeCount = display.getByTitle('strikes-count');
    expect(strikeCount).toHaveTextContent('0');

    it('component exists', () => {
        expect(display).toBeTruthy();
    })
})