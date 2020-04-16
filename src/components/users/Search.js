import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    SearchUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    Clear: PropTypes.func.isRequired,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text !== '') {
      this.props.SearchUsers(this.state.text);
      this.setState({ text: '' });
    } else {
      this.props.setAlert('Escribir algo para buscar', 'danger');
    }
  };

  render() {
    const { showClear, Clear } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            value={this.state.text}
            onChange={this.onChange}
            name='text'
            placeholder='Buscar Usuario'
          ></input>
          <input
            className='btn btn-dark btn-block'
            type='submit'
            value='Buscar'
          ></input>
        </form>
        {showClear && (
          <button className='btn btn-danger btn-block' onClick={Clear}>
            Limpiar
          </button>
        )}
      </div>
    );
  }
}

export default Search;
