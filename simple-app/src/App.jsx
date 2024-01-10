// src/App.js
import React, { useState } from 'react';
import giphyService from './services/giphy.service.jsx';

const App = () => {
  const [gifs, setGifs] = useState([]);
  const handleSearch = async (query) => setGifs(await giphyService.getGifs(query));

  return (
    <div>
      <h1>GIF Search App</h1>
      <input type="text" onChange={(e) => handleSearch(e.target.value)} />
      <div>
        {gifs.map((gif) => (
          <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
        ))}
      </div>
    </div>
  );
};

export default App;
