import Profile from 'components/profile/Profile';
import DetailRoom from 'components/rooms/detailRoom/DetailRoom';
import Rooms from 'components/rooms/Rooms';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

function RoomsRoute(props) {
    const {path, url} = useRouteMatch();
    return (
        <Switch>
            <Route component={Rooms} exact path={`${path}`} />
            <Route component={DetailRoom} exact path={`${path}/:id`} />
        </Switch>
    );
}

export default RoomsRoute;