import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from '../../components/layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const OneUser = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, getUserRepos, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    company,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  return loading !== true ? (
    <Fragment>
      <Link to='/' className='btn btn-dark btn-sm'>
        Volver
      </Link>
      <div className='badge badge-dark'>
        Contratable:{' '}
        {hireable === true ? (
          <i className='fas fa-check-circle text-success'></i>
        ) : (
          <i className='fas fa-exclamation-circle text-danger'></i>
        )}
      </div>
      <div className='card grid-2'>
        <div className='text-center'>
          <img
            src={avatar_url}
            alt='AVATAR'
            className='img round-img'
            style={{ width: '200px' }}
          />
          <h3>{name}</h3>
          {location && <p>Ubicacion: {location}</p>}
        </div>
        <div>
          {bio && (
            <Fragment>
              <strong>Bio</strong>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visita mi Perfil!
          </a>
          <ul>
            <li>
              <p>Usuario: {login}</p>
            </li>
            {company && (
              <Fragment>
                <li>
                  <p>Compania: {company}</p>
                </li>
              </Fragment>
            )}
            {blog && (
              <Fragment>
                <li>
                  <a href={blog} className='text-success'>
                    Pagina Personal
                  </a>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Seguidores: {followers}</div>
        <div className='badge badge-dark'>Siguiendo: {following}</div>
        <div className='badge badge-light'>Repos Publicos: {public_repos}</div>
        <div className='badge badge-success'>
          Gists Publicos: {public_gists}
        </div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  ) : (
    <Spinner />
  );
};

export default OneUser;
