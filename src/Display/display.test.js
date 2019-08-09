import React from 'react';

import { render } from '@testing-library/react';
import Display from './Display';
import "@testing-library/react/cleanup-after-each";

import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
    render(<Display />)
});

describe('display tests', () => {
    const display = render(<Display ballCount={0} strikeCount={0} />)
    const ballCount = display.getByTitle('balls-count');    
    expect(ballCount).toHaveTextContent('0 balls out of 4');

    const strikeCount = display.getByTitle('strikes-count');
    expect(strikeCount).toHaveTextContent('0 strikes out of 3');

    it('component exists', () => {
        const display = render(<Display />)
        expect(display).toBeTruthy();
    })
})