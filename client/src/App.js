import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register"
import Login from "./pages/Login"
import Store from "./pages/Store";
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
            <Route exact path="/login" component={Login} /> 
            <Route exact path="/store" component={Store}/>
    
          </Switch>
        </div>
      </Router>

    </div>
  )
}

export default App;
