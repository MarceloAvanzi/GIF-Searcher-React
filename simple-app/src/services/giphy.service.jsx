// src/services/giphyService.js
import axios from 'axios';

const API_KEY = 'f3b8PiHqEC58PxYkUN0KluDjNK6pTufN';
const BASE_URL = 'https://api.giphy.com/v1/gifs/search';

const getGifs = async (query, limit = 10) => {
  try {
    // const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=f3b8PiHqEC58PxYkUN0KluDjNK6pTufN&q=${query}&limit=25&offset=0&rating=g&lang=en`);
    const response = await axios.get(BASE_URL, {
      params: {
        api_key: API_KEY,
        q: query,
        limit: limit,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching GIFs:', error);
    throw error;
  }
};

export default { getGifs };
