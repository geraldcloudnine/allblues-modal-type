import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://fakestoreapi.com/'
});

axios.interceptors.response.use((res) => res.data);

export default axios;
