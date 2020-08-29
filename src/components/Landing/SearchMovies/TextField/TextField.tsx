import React, { useState } from "react";

import styles from './TextField.module.css';


const TextField = ({onChange}: {onChange?: (searchString: string) => void}) => {
    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);
        onChange?.(newValue);
    };

    return (
        <input type='text' className={styles.TextField} value={value} placeholder='Search' onChange={handleChange}/>
    );
};

export default TextField;