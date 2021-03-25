import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Register from "./components/Register";
import Dashboard from "./components/DashBoard";
import Login from './components/Login'

function App() {
  return (
    <div className="login">
      <BrowserRouter>
        <NavLink to='/login'>Login</NavLink><br/>
        <NavLink to="/register">Register</NavLink><br/>
        <NavLink to='/dashboard'></NavLink>
        <div>
          <Switch>
            <Route exact path='/login' component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path='/dashboard' component={Dashboard}/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
