import React from 'react';
import {StylesProvider} from '@material-ui/core/styles';
import Layout from "./Layout/Layout";
import './App.css';

function App() {
    return (
        <StylesProvider injectFirst>
            <Layout />
        </StylesProvider>
)
    ;
}

export default App;
