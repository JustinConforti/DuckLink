import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <div>
          <Switch>
            <Route exact path="/home" component={Homepage} />
          <Route exact path="/registration" component={Register} />
          <Route exact path="/login" component={Login} /> }
    
          </Switch>
        </div>
      </Router>

    </div>
  )
}

export default App;
