import React, { Component } from 'react';
import 'normalize.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styles from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import ImageApi from './services/img_api';

class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    currentPage: 1,
    error: null,
    showModal: false,
    largeImgUrl: null,
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.searchQuery);
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }

    if (prevState.currentPage !== this.setState.currentPage) {
      this.smoothScroll();
    }
  }

  onSubmitForm = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null,
      isLoading: false,
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    ImageApi.fetchImages(options)
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          currentPage: prevState.currentPage + 1,
        }));
        console.log(this.state.searchQuery);
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  smoothScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  setBigImageUrl = url => {
    this.setState({ largeImgUrl: url });
    if (url) window.addEventListener('keydown', this.closeModal);
  };

  closeModal = e => {
    window.removeEventListener('keydown', this.closeModal);

    if (e.code === 'Escape') {
      this.setState({ largeImgUrl: null });
    } else if (e.target.src !== this.state.largeImgUrl) {
      this.setState({ largeImgUrl: null });
    }
  };

  render() {
    const { images, isLoading, largeImgUrl } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onSubmitForm} />
        <ImageGallery
          images={this.state.images}
          onSetBigImageUrl={this.setBigImageUrl}
        />
        {images.length > 0 && !isLoading && (
          <Button onClick={this.fetchImages} />
        )}
        {largeImgUrl && (
          <Modal onCloseModal={this.closeModal}>
            <img src={largeImgUrl} alt="modalImg"></img>
          </Modal>
        )}
        {isLoading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
      </div>
    );
  }
}
export default App;
