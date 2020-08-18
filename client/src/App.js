import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import Home from './page/Home';
import Login from './page/Login';
import NavigationBar from './components/NavigationBar/NavigationBar';

import './App.scss';

const AppContainer = styled.div`
  width: 100%;
`;

function App() {
  return (
    <AppContainer className="app">
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
