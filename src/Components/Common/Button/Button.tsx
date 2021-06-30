import React, {FC} from 'react';
import './Button.css'

// @ts-ignore
const Button: FC = ({label,name, event, disabled}) => {
    return (
        <button disabled={disabled} name={name} aria-label={label} onClick={event}>
            {label}
        </button>
    );
};

export default Button;
