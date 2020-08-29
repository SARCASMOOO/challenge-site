import React, { useState } from "react";

import styles from './TextField.module.css';


const TextField = ({placeholder, onChange}: {placeholder?: string, onChange?: (searchString: string) => void}) => {
    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);
        onChange?.(newValue);
    };

    return (
        <input type='text' className={styles.TextField} value={value} placeholder={placeholder} onChange={handleChange}/>
    );
};

export default TextField;