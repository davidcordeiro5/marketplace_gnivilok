import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import styled from 'styled-components';

import { AuthProvider } from './context/auth';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './page/Home';
import Login from './page/Login';
import Register from './page/Register';
import Profile from './page/Profile';
import SinglePost from './page/SinglePost';

import './App.scss';

const AppContainer = styled.div`
  width: 100%;
`;

function App() {
  return (
    <AuthProvider>
      <AppContainer className="app">
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/post/:postId" component={SinglePost} />
          </Switch>
        </Router>
      </AppContainer>
    </AuthProvider>
  );
}

export default App;
