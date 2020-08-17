import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from './page/Home';
import Login from './page/Login';
import NavigationBar from './components/NavigationBar/NavigationBar';

import './App.css';

function App() {
  return (
    <div className="app">
       <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
