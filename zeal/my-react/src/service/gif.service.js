import axios from 'axios';

const API_KEY = 'f3b8PiHqEC58PxYkUN0KluDjNK6pTufN';
const BASE_URL = 'https://api.giphy.com/v1/gifs/search';

const getGifs = async (search) => {
    const response = await axios.get(BASE_URL, {
        params: {
            api_key: API_KEY,
            q: search,
            limit: 10,
        },
    });

    return response.data.data;
}

export default { getGifs };