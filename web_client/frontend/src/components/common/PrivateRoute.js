import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import { getCookie } from "utils/Cookie";
import { CheckToken } from "./CheckToken";

function PrivateRoute({ component: Component, ...rest }) {
  const token = localStorage.getItem("token");
//   const token = getCookie('token');
  const authen = CheckToken(token);
//   console.log('authen: ' + authen);
  const history = useHistory();
  return (
    <Route
      {...rest}
      render={(props) => {
        return authen === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: history.location } }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;
