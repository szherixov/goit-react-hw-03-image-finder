import { createPortal } from 'react-dom';
import { Component } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendelKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendelKeyDown);
  }
  hendelKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.showModal();
    }
  };
  hendelBecdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.showModal();
    }
  };

  render() {
    return createPortal(
      <div className={styles.overlay} onClick={this.hendelBecdropClick}>
        <div className={styles.modal}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  showModal: PropTypes.func.isRequired,
};
export default Modal;
