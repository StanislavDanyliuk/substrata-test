import React, {FC} from 'react';

import './HistoryBar.css'
import {historyActions} from "../../../utils/constants";

const HistoryBar: FC = () => {
    return (
        <aside>
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
