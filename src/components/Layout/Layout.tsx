import React, {Fragment} from "react";
import styles from './Layout.module.css';

const Layout = () => (
    <div className={styles.Layout}>
        <nav>Navigation</nav>
        <main>Main content</main>
        <footer>Footer</footer>
    </div>
);

export default Layout;