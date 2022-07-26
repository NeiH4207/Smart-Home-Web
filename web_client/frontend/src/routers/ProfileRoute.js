import Profile from 'components/profile/Profile';
import React from 'react';
import "semantic-ui-css/semantic.min.css";
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import "components/profile/Profile.css"

function ProfileRoute(props) {
    const {path, url} = useRouteMatch();
    return (
        <Switch>
            <Route path={`${path}`}>
                <Profile />
            </Route>
        </Switch>
    );
}

export default ProfileRoute;