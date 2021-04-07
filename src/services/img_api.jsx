import axios from 'axios';

const fetchImg = ({ searchQuery, currentPage }) => {
  const API_KEY = '21032042-86fc12300170496253986cb8c';

  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data);
};

export default { fetchImg };
