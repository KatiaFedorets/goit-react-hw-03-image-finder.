import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const DEFAULT_IMG =
  'https://lh3.googleusercontent.com/proxy/TrqqKK7SJGwfYojUnyGfJA_3L0v2P-1euh2qsq88Xc0CAgIyD1Zg6Fu_qAgjRNGgLOVQvnS7-IbMb3Rk139R5ma_ll61FGTFmWo9qA';

const ImageGalleryItem = ({ imageSrc, alt, bigImgUrl, onSetBigImageUrl }) => (
  <li
    className={styles.ImageGalleryItem}
    onClick={() => onSetBigImageUrl(bigImgUrl)}
  >
    <img src={imageSrc} alt={alt} className={styles.ImageGalleryItemImage} />
  </li>
);

ImageGalleryItem.defaultProps = {
  imageSrc: DEFAULT_IMG,
  bigImgUrl: DEFAULT_IMG,
  alt: 'photo',
  onSetBigImageUrl: () => {},
};

ImageGalleryItem.propTypes = {
  imageSrc: PropTypes.string,
  bigImgUrl: PropTypes.string,
  alt: PropTypes.string,
  onSetBigImageUrl: PropTypes.func,
};
export default ImageGalleryItem;
