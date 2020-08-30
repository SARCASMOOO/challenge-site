import React from "react";

import styles from './TextField.module.css';


const TextField = ({placeholder, value, onChange}: {placeholder?: string, value?: string, onChange?: (value: string) => void}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        onChange?.(newValue);
    };

    return (
        <input type='text' className={styles.TextField} value={value} placeholder={placeholder} onChange={handleChange}/>
    );
};

export default TextField;