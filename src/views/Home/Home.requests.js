import { API_KEY, ENDPOINTS } from "../../utils/urls";
import axios from "axios";

const fetchTrendingGifs = (limit, offset) =>
  axios.get(`${ENDPOINTS.TRENDING_GIFS}?api_key=${API_KEY}&limit=${limit}&offset=${offset}&rating=g`);

export { fetchTrendingGifs };
