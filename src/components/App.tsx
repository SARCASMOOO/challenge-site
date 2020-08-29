import React from 'react';

import {StylesProvider} from '@material-ui/core/styles';

// Components
import Layout from "./Layout/Layout";
import Landing from "./Landing/Landing";

// Styles
import './App.css';

function App() {
    return (
        <StylesProvider injectFirst>
            <Layout>
                <Landing/>
            </Layout>
        </StylesProvider>
    );
}

export default App;
