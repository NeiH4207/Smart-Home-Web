import Profile from 'components/profile/Profile';
import DetailRoomTest from 'components/test/detailRoom/DetailRoomTest';
import Test from 'components/test/Test';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

function TestRoute(props) {
    const {path, url} = useRouteMatch();
    return (
        <Switch>
            <Route component={Test} exact path={`${path}`} />
            <Route component={DetailRoomTest} exact path={`${path}/:id`} />
        </Switch>
    );
}

export default TestRoute;