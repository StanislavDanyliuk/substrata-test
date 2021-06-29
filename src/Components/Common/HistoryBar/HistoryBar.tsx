import React, {FC} from 'react';


import './HistoryBar.css'
import {RootStateOrAny, useSelector} from "react-redux";

const HistoryBar: FC = () => {
    const historyActions = useSelector((state: RootStateOrAny) => state.history)
    return (
        <aside>
            {/*@ts-ignore*/}
            {/*@ts-ignore*/}
            {historyActions.map(({date, actionType}) => {
                return (
                    <div key={Math.random()}>
                        <span className='date'>{date}</span>
                        <span>{actionType}</span>
                    </div>
                )
            })}
        </aside>
    );
};

export default HistoryBar;
