import React from 'react';

import styles from './Button.module.css';

function Button({children, disabled = false, onClick}: React.PropsWithChildren<{disabled?: boolean, onClick?: () => void}>) {
    const handleClick = () => {
        if (disabled) return;

        onClick?.();
    };

    const disabledStyle = disabled ? styles.Disabled : styles.Enabled;

    return ( 
        <div onClick={handleClick} className={`${styles.Button} ${disabledStyle}`}>
            {children}
        </div>
    );
}

export default Button;