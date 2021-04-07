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
import ImgApi from './services/img_api';

class App extends Component {
  state = {
    img: [],
    searchQuery: '',
    currentPage: 1,
    showModal: false,
  };

  onSubmitForm = ({ query }) => {
    this.setState({ searchQuery: query });

    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    ImgApi.fetchImg(options).then(response => {
      this.setState(prevState => ({
        img: response.hits,
        currentPage: prevState + 1,
      }));
      console.log(this.state.searchQuery);
    });
  };

  // onClick = () => {
  //   this.fetchImg(this.state.searchQuery, this.state.currentPage);
  // };

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
        <Button onClick={this.fetchImg} />
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
