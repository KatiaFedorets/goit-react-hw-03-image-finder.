import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imageSrc, alt, bigImgUrl }) => (
  <li className={styles.ImageGalleryItem}>
    <img src={imageSrc} alt={alt} className={styles.ImageGallery} />
  </li>
);

export default ImageGalleryItem;
