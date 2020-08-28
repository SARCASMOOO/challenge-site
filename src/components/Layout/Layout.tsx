import React from "react";
import styles from './Layout.module.css';

const Layout = ({children}: React.PropsWithChildren<{}>) => (
    <div className={styles.Layout}>
        {children}
    </div>
);

export default Layout;