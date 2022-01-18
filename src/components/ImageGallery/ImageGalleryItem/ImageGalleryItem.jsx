import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

function ImageGalleryItem({ picture, onClick }) {
  return (
    <li className={styles.imageGalleryItem} onClick={() => onClick(picture.largeImageURL)}>
      <img
        src={picture.webformatURL}
        alt={picture.tags}
        className={styles.imageGalleryItem_image}
      />
    </li>
  );
}
ImageGalleryItem.propTypes = {
  picture: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
};

export default ImageGalleryItem;
