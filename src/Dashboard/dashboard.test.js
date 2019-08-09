import React from 'react';

import { render } from '@testing-library/react';
import Dashboard from './Dashboard';
import "@testing-library/react/cleanup-after-each";

import '@testing-library/jest-dom/extend-expect';


it('renders without crashing', () => {
    render(<Dashboard />)
});

describe('dashboard tests', () => {
    const dashboard = render(<Dashboard />)
    const ballButton = dashboard.getByTitle('ballBtn');
    expect(ballButton).toHaveTextContent('Ball');
    const strikeButton = dashboard.getByTitle('strikeBtn');
    expect(strikeButton).toHaveTextContent('Strike');

    it('component exists', () => {
        const dashboard = render(<Dashboard />)
        expect(dashboard).toBeTruthy();
    })    
})