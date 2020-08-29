import React from "react";
import styles from './Layout.module.css';

function Layout({children}: React.PropsWithChildren<{}>) {
    return (
        <div className={styles.Layout}>
            {children}
        </div>
    );
}

export default Layout;