import React from 'react'
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Airtime from './Components/RoutPages/Airtime';
import Iot from './Components/RoutPages/Iot';
import Pos from './Components/RoutPages/Pos';
import Login from './Components/LoginDiv/Login';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/08hUSaDfFbc5glJRjn3e" exact component={Airtime} />
          <Route path="/5drup0K9iaglYqNIMs64" exact component={Iot} />
          <Route path="/9GnUXxYBRndM36OTN4dG" exact component={Pos} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
