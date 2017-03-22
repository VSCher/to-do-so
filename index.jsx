import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './src/redux/configureStore';
import Application from './src/Application.jsx';

const store = configureStore();

render(
    <Provider store={store}>
        <Application/>
    </Provider>,
    document.getElementById('root')
);