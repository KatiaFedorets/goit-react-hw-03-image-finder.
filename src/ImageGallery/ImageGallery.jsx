import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onSetBigImageUrl }) => (
  <ul className={styles.ImageGallery}>
    {images.map(({ id, webformatURL, tags, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        imageSrc={webformatURL}
        alt={tags}
        bigImgUrl={largeImageURL}
        onSetBigImageUrl={onSetBigImageUrl}
      />
    ))}
  </ul>
);

ImageGallery.defaultProps = {
  images: [],
  onSetBigImageUrl: () => {},
};

ImageGallery.propTypes = {
  images: PropTypes.array,
  onSetBigImageUrl: PropTypes.func,
};

export default ImageGallery;
