import axios from 'axios'

export const getPosts = (query, page = 0) => axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${page}`);