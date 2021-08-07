import axios from 'axios'

export const getHits = (query, page = 0) => axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${page}&hitsPerPage=8`);