import axios from 'axios';

const fetchImg = ({ searchQuery, pageNumber }) => {
  const API_KEY = '21032042-86fc12300170496253986cb8c';

  return axios
    .get(
      // `https://pixabay.com/api/?q=${searchQuery}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      `https://pixabay.com/api/?q=${searchQuery}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data);
};

export default { fetchImg };
