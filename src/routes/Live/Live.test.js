import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Live from './Live';

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Live />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});

