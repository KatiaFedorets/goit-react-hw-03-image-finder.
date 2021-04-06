import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handelNameChange = event => {
    this.setState({
      query: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      query: '',
    });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchForm_button}>
            <span className={styles.SearchForm_button_label}>Search</span>
          </button>
          <input
            className={styles.SearchForm_input}
            type="text"
            value={this.state.query}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handelNameChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
