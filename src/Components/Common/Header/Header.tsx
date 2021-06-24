import React, {FC} from 'react';
import bitcoin from '../../../assets/bitcoin.svg'

import './Header.css'

const Header: FC = () => {
    return (
        <header>
            <div><img src={bitcoin} alt="bitcoin-logo"/><h4>Bitcoin Frenzy</h4></div>
            <div>1 bitcoin = 1000 $</div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div>10000 $</div>
                <div>7 bitcoins</div>
            </div>
        </header>
    );
};

export default Header;
