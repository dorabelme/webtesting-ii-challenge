import React from 'react';

import { render, toHaveTextContent } from '@testing-library/react';
import Dashboard from './Dashboard';
import "@testing-library/react/cleanup-after-each";


it('renders without crashing', () => {
    render(<Dashboard />)
});

describe('dashboard tests', () => {
    const dashboard = render(<Dashboard />)
    const ballButton = dashboard.getByTitle('ballBtn');
    expect(ballButton).toHaveTextContent('Ball');
    const strikeButton = dashboard.getByTitle('strikeBtn');
    expect(strikeButton).toHaveTextContent('Strie');

    it('component exists', () => {
        expect(dashboard).toBeTruthy();
    })    
})