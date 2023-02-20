import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {StandardLayout} from './layouts';
import {HomePage} from './pages';

import {store} from 'store';

import './styles.scss';

function App() {
    return (
        <Provider store={store}>
            <Router>
                {/* Will be Router here */}
                <StandardLayout>
                    <HomePage />
                </StandardLayout>
            </Router>
        </Provider>
    );
}

export default App;
