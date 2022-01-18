import { Component } from 'react';
import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset() {
    this.setState({ query: '' });
  }
  render() {
    const { query } = this.state;
    return (
      <header className={styles.searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.searchForm}>
          <button type="submit" className={styles.searchFormButton}>
            <span className={styles.searchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            name="query"
            value={query}
            className={styles.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
