import { http } from '../http';

const fetchBeersList = async (page, per_page) => {
  const response = await http.get(`/beers?page=${page}&per_page=${per_page}`)
  return response.data
};

const fetchBeerDetails = async (id) => {
  const response = await http.get(`/beers/${id}`)
  return response.data
};

const searchBeerName = async (beerName) => {
  const response = await http.get(`beers?beer_name=${beerName}`)
  return response.data
};

export {
  fetchBeersList,
  fetchBeerDetails,
  searchBeerName,
};

