import axios from 'axios';

const fetchImages = ({ searchQuery = '', currentPage = 1 }) => {
  const API_KEY = '21032042-86fc12300170496253986cb8c';
  return axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
};

export default { fetchImages };
