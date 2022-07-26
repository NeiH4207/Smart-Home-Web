import Login from "components/login/Login";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "Routes";

import Menus from './components/layout/Menus';

function App() {
  return (
    <Router>
      {/* <Menus /> */}
      {/* <Login /> */}
      <Routes />
    </Router>
  );
}

export default App;
