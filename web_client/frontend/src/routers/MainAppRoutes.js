import Loading from "components/common/Loading";
import PrivateRoute from "components/common/PrivateRoute";

import Menus from "components/layout/Menus";
import React from "react";
import { Suspense } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import ErrorNotFound from "../components/common/ErrorNotFound";
import { lazy } from "react";

const Home = lazy( () => import("routers/HomeRoute"));
const Rooms = lazy( () => import("routers/RoomsRoute"));
const Deveices = lazy( () => import("routers/DeveicesRoute"));
const Profile = lazy( () => import("routers/ProfileRoute"));
const Test = lazy( () => import("routers/TestRoute"));


function MainAppRoutes(props) {
  return (
    <Menus>
      <Suspense fallback={<Loading />}>
        <Switch>
          <PrivateRoute component={Home} exact path="/" />
          <PrivateRoute component={Rooms} path="/rooms" />
          <PrivateRoute component={Deveices} path="/deveices" />
          <PrivateRoute component={Profile} path="/profile" />
          
          

          <PrivateRoute component={Test} path="/test" />

          <Route component={ErrorNotFound} path="*" />
        </Switch>
      </Suspense>
    </Menus>
  );
}

export default MainAppRoutes;
