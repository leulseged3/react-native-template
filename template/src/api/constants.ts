import axios from 'axios';


export const API_EXAMPLE_BLOG = axios.create({
  baseURL: 'https://example.com/api/blog',
});