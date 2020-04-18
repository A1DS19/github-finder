import React, { useReducer } from 'react';
import githubContext from './githubContext';
import githubReducer from './githubReducer';
import axios from 'axios';

import {
  SEARCH_USERS,
  GET_USER,
  SET_LOADING,
  CLEAR_USERS,
  GET_REPOS,
} from '../types';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  //!Busca todos los usuarios y busca
  const SearchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  //!Busca un solo usuario
  const getUser = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  //!Busca REPOS de un solo usuario
  const getUserRepos = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  //!Limpia pagina de usuarios buscados
  const Clear = () => {
    dispatch({
      type: CLEAR_USERS,
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });
  return (
    <githubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        SearchUsers,
        Clear,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;
