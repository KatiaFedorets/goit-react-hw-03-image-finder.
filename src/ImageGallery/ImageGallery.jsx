import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => (
  <ul className="ImageGallery">
    {images.map(({ id, webformatURL, tags, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        imageSrc={webformatURL}
        alt={tags}
        bigImgUrl={largeImageURL}
      />
    ))}
  </ul>
);

export default ImageGallery;
