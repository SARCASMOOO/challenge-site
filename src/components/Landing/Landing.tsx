import React from "react";
import styles from './Landing.module.css';

interface Props {}

const Landing = ({}: Props) => (
    <main className={styles.Main}>
        <div style={{backgroundColor: 'cyan'}}>search area</div>
        <div>list area</div>
    </main>
);

export default Landing;
