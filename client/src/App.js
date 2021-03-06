import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register"
import Login from "./pages/Login"
import Store from "./pages/Store";
import DuckDungeon from "./pages/DuckDungeon";
import DuckMinesweeper from "./pages/DuckMinesweeper";
import MiniGames from "./pages/MiniGames";
import DuckPacman from "./pages/DuckPacman";
import "./App.css";
import "./bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path ="/" component={Register} />
            <Route exact path="/home" component={Homepage} />
            <Route exact path="/registration" component={Register} />
            <Route exact path="/login" component={Login} /> 
            <Route exact path="/store" component={Store}/>
            <Route exact path="/dungeon" component={DuckDungeon}/>
            <Route exact path="/pacman" component={DuckPacman}/>
            <Route exact path="/minesweeper" component={DuckMinesweeper}/>
            <Route exact path="/minigames" component={MiniGames}/>
    
          </Switch>
        </div>
      </Router>

    </div>
  )
}

export default App;
