import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Status from './Status';

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Status />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});