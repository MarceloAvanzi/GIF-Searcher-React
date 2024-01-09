// src/services/giphyService.js
import axios from 'axios';

const getGifs = async (query, limit = 10) => {
  try {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=f3b8PiHqEC58PxYkUN0KluDjNK6pTufN&q=${query}&limit=25&offset=0&rating=g&lang=en`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching GIFs:', error);
    throw error;
  }
};

export default { getGifs };
