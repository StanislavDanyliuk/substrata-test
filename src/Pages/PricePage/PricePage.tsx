import React from 'react';
import Button from "../../Components/Common/Button";
import {useDispatch} from "react-redux";

import './PricePage.css'
import {decrement, increment} from "../../store/reducers/bitcoinVolumeReducer";

const PricePage = () => {
    const dispatch = useDispatch()

    return (
        <>
            <p>
                Bitcoin price is 1000$
            </p>
            <div>
                {/*@ts-ignore*/}
                <Button label={'Increase Bitcoin Price (+1,000)'}
                        event={() => dispatch(increment())}/>
                {/*@ts-ignore*/}
                <Button label={'Decrease Bitcoin Price (-1,000)'}
                        event={() => dispatch(decrement())}/>
            </div>
        </>
    );
};

export default PricePage;
