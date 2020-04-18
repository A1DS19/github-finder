import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Navbar from './components/layout/Nabvar';
import Home from './components/pages/Home';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import OneUser from './components/users/OneUser';
import NotFound from './components/pages/NotFound';
import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar icon='fab fa-github' title='Github-Finder' />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/about' component={About} />
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/users/:login' component={OneUser}></Route>
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
