import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Nabvar';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import axios from 'axios';
import About from './components/pages/About';
import OneUser from './components/users/OneUser';
import './App.css';

class App extends Component {
  state = {
    users: [],
    repos: [],
    user: {},
    loading: false,
    alert: null,
  };
  //!Busca Usuarios cuando pagina('/') carga
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
  }
  //!Busca todos los usuarios y busca
  SearchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  //!Busca un solo usuario
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ user: res.data, loading: false });
  };
  //!Busca REPOS de un solo usuario
  getUserRepos = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ repos: res.data, loading: false });
  };

  Clear = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setInterval(() => this.setState({ alert: null }), 3100);
  };

  render() {
    const { users, loading, alert, user, repos } = this.state;
    return (
      <Router>
        <div className='App'>
          <Navbar icon='fab fa-github' title='Github-Finder' />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      SearchUsers={this.SearchUsers}
                      Clear={this.Clear}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <User users={users} loading={loading} />
                  </Fragment>
                )}
              ></Route>
              <Route
                exact
                path='/users/:login'
                render={(props) => (
                  <OneUser
                    {...props}
                    loading={loading}
                    user={user}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    repos={repos}
                  />
                )}
              ></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
