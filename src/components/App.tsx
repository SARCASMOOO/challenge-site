import React from 'react';
import {StylesProvider} from '@material-ui/core/styles';

import './App.css';

function App() {
    return (
        <StylesProvider injectFirst>
            <h1></h1>
        </StylesProvider>
)
    ;
}

export default App;
