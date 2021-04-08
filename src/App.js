import React, { Component } from 'react';
// import axios from 'axios';
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
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.prevState !== this.state.searchQuery) {
      this.fetchImages();
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal, images, isLoading } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onSubmitForm} />
        <ImageGallery images={this.state.images} />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <p>lorem</p>
          </Modal>
        )}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.fetchImages} />
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
