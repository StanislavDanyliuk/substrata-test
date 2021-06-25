import React, {FC} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {sidebarMenuItems} from "./utils/constants";
import withMainLayout from "./Components/HOC/withMainLayout";

const App: FC = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    {sidebarMenuItems.map(({label, path, page}) => {
                        return (
                            <Route key={label} path={path} exact={true}>
                                {withMainLayout(page)}
                            </Route>
                        )
                    })}
                    <Redirect to={'/wallet'}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
