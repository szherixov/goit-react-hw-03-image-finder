import styles from './Button.module.css';
import PropTypes from 'prop-types';

function Button({ onClick }) {
  return (
    <div className={styles.section}>
      <button className={styles.button} onClick={onClick}>
        Loading
      </button>
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;
