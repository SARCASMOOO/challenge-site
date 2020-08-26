import React from 'react';
import {StylesProvider} from '@material-ui/core/styles';
import Layout from "./Layout/Layout";
import './App.css';

function App() {
    return (
        <StylesProvider injectFirst>
            <Layout>
                <nav>Navigation</nav>
                <main>Main content</main>
                <footer>Footer</footer>
            </Layout>
        </StylesProvider>
)
    ;
}

export default App;
