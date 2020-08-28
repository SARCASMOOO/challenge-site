import React from 'react';

import {StylesProvider} from '@material-ui/core/styles';

// Components
import Layout from "./Layout/Layout";
import Navigation from "./Navigation/Navigation";
import Landing from "./Landing/Landing";
import Footer from "./Footer/Footer";

// Styles
import './App.css';

function App() {
    return (
        <StylesProvider injectFirst>
            <Layout>
                <Navigation/>
                <Landing/>
                <Footer/>
            </Layout>
        </StylesProvider>
    );
}

export default App;
