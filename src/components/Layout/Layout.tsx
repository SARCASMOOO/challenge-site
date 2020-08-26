import React, {Fragment} from "react";
import styles from './Layout.module.css';

interface Props {
    children: React.ReactNode;
}

const Layout = ({children}: Props) => (
    <div className={styles.Layout}>
        {children}
    </div>
);

export default Layout;