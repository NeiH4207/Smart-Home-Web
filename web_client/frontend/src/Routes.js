import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "components/login/Login";
import PrivateRoute from "components/common/PrivateRoute";
import Loading from "components/common/Loading";
import MainAppRoutes from "routers/MainAppRoutes";

import Register from "components/register/Register";

function Routes(props) {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/register" />
        <PrivateRoute component={MainAppRoutes} path="*" />
      </Switch>
    </Suspense>
  );
}

export default Routes;
