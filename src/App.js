import React, { Component } from 'react';
import Navbar from './components/layout/Nabvar';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
  }

  SearchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  Clear = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setInterval(() => this.setState({ alert: null }), 3100);
  };

  render() {
    const { users, loading, alert } = this.state;
    return (
      <div className='App'>
        <Navbar icon='fab fa-github' title='Github-Finder' />
        <div className='container'>
          <Alert alert={alert} />
          <Search
            SearchUsers={this.SearchUsers}
            Clear={this.Clear}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <User users={users} loading={loading} />
        </div>
      </div>
    );
  }
}

export default App;
