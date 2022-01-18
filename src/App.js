import React, { Component } from 'react';
import Modal from './components/Modal';
import Searchbar from './components/Searchbar';
import Button from './components/Button';
import ImageGallery from './components/ImageGallery';
import { productsApi } from './shared/service/Api';
import './App.css';

class App extends Component {
  state = {
    pictures: [],
    page: 1,
    query: '',
    largeImage: '',
    imgTags: '',
    error: null,
    showModal: false,
    isLoading: false,
    finish: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, isLoading, page } = this.state;
    if (prevState.query !== query || (isLoading && prevState.page < page)) {
      this.fetchProducts();
      this.setState({ finish: false });
    }
  }

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };
  async fetchProducts() {
    try {
      const { page, query } = this.state;
      this.setState({ isLoading: true });
      const { data } = await productsApi.searchPictures(page, query);
      this.setState(({ pictures }) => {
        const newState = {
          pictures: [...pictures, ...data.hits],
          isLoading: false,
          error: null,
        };
        if (data.hits.length < 11) {
          newState.finish = true;
        }
        if (!data.hits.length) {
          newState.error = true;
        }
        return newState;
      });
    } catch (error) {
      this.setState({
        isLoading: false,
        error,
      });
    }
  }

  handleOpenModal = (largeImage = '') => {
    this.setState({ largeImage });

    this.toggleModal();
  };
  onChangeQwery = ({ query }) => {
    this.setState({ query: query, page: 1, pictures: [], error: null });
  };
  loadMore = () => {
    this.setState(({ page }) => ({
      isLoading: true,
      page: page + 1,
    }));
  };
  render() {
    const { pictures, isLoading, error, showModal, largeImage, imgTags, finish } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeQwery} />
        {error && <h1>Impossible to load the pictures!</h1>}
        {!error && <ImageGallery pictures={pictures} onClick={this.handleOpenModal} />}
        {!finish && pictures.length !== 0 && <Button onClick={this.loadMore} />}
        {/* {isLoading && <Loader />} */}
        {showModal && (
          <Modal showModal={this.handleOpenModal}>
            <img src={largeImage} alt={imgTags} />
          </Modal>
        )}
      </div>
    );
  }
}
export default App;
