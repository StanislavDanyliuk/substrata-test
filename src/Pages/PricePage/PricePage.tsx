import React from 'react';
import Button from "../../Components/Common/Button";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";

import './PricePage.css'
import {addToHistory, decrement, increment} from "../../store/reducers/reducers";

const PricePage = () => {
    const price = useSelector((state: RootStateOrAny) => state.price.value);
    const dispatch = useDispatch();

    const handleDispatch = (element: any) => {
        dispatch(addToHistory({
            date: new Date(Date.now()).toLocaleDateString('en-GB', {
                hour: "numeric",
                minute: 'numeric',
                second: "numeric"
            }),
            actionType: element.ariaLabel
        }))
        element.name === 'increment' ? dispatch(increment()) : dispatch(decrement())
    };
    return (
        <>
            <p>
                Bitcoin price is {price}$
            </p>
            <div>
                {/*@ts-ignore*/}
                <Button name={'increment'} label={'Increase Bitcoin Price (+1,000)'}
                        event={(e: any) => handleDispatch(e.target)}/>
                {/*@ts-ignore*/}
                <Button name={'decrement'} label={'Decrease Bitcoin Price (-1,000)'}
                        event={(e: any) => handleDispatch(e.target)}/>
            </div>
        </>
    );
};

export default PricePage;
