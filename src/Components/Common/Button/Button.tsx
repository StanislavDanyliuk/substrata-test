import React, {FC} from 'react';
import './Button.css'

// @ts-ignore
const Button: FC = ({label, event}) => {
    return (
        <button name={label} onClick={event}>
            {label}
        </button>
    );
};

export default Button;
