import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";

import icon from '../../../assets/icon.svg'
import {sidebarMenuItems} from "../../../utils/constants";

import './Sidebar.css'

const Sidebar = () => {
    return (
        <Router>
            <nav>
                <ul>
                    {sidebarMenuItems.map(({label, path, component}) => {
                        return (
                            <li key={path}>
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
