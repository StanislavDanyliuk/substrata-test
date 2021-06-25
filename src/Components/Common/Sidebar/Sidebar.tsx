import React from 'react';
import {BrowserRouter as Router, Link, useHistory} from "react-router-dom";

import icon from '../../../assets/icon.svg'
import {sidebarMenuItems} from "../../../utils/constants";

import './Sidebar.css'

const Sidebar = () => {

    const history = useHistory()
    return (
        <Router>
            <nav>
                <ul>
                    {sidebarMenuItems.map(({label, path}) => {
                        return (
                            <li key={path} onClick={() => history.push(path)}>
                                <Link to={path}>
                                    <img src={icon} alt='icon'/>{label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </Router>
    );
};

export default Sidebar;
