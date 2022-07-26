import Deveices from 'components/deveices/Deveices';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

function DeveicesRoute(props) {
    const {path, url} = useRouteMatch();
    return (
        <Switch>
            <Route path={`${path}`}>
                <Deveices/>
            </Route>
        </Switch>
    );
}

export default DeveicesRoute;