import React, {FC} from 'react';
import Header from "./Components/Common/Header";
import Sidebar from "./Components/Common/Sidebar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import WalletPage from "./Pages/WalletPage";

const App: FC = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Header/>
                    <Sidebar/>
                    <Route path={'/wallet'} exact>
                        <WalletPage/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
