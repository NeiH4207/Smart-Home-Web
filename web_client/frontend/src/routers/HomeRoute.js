import Home from 'components/home/Home';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

function HomeRoute(props) {
    const {path, url} = useRouteMatch();
    return (
        <Switch>
            <Route path={`${path}`}>
                <Home/>
            </Route>
        </Switch>
    );
}

export default HomeRoute;