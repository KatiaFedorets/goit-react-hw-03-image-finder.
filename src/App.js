import React, { Component } from 'react';
// import axios from 'axios';
import 'normalize.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styles from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import ImageGallery from './ImageGallery/ImageGallery';
import ImgApi from './services/img_api';

class App extends Component {
  state = {
    img: [],
    searchQuery: '',
    showModal: false,
  };

  onSubmitForm = ({ query }) => {
    this.setState({ searchQuery: query });
    ImgApi.fetchImg(this.state.searchQuery).then(response => {
      this.setState({ img: response.hits });
      // console.log(response.hits);
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onSubmitForm} />
        <ImageGallery images={this.state.img} />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <p>lorem</p>
          </Modal>
        )}
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
}
export default App;
