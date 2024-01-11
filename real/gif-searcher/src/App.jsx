import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const API_KEY = 'f3b8PiHqEC58PxYkUN0KluDjNK6pTufN';
  const BASE_URL = 'https://api.giphy.com/v1/gifs/search';

  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState('interview');
  
  const handleSearch = (search) => setQuery(search)

  useEffect(() => {
    axios.get(BASE_URL,{
      params: {
        api_key: API_KEY,
        q: query
      }
    })
    .then((res) => {
      setGifs(res.data.data)
    })

  }, [query])

  return (
    <>
        <h1>Gif Searcher</h1>
        <input type='text' onChange={(e) => {handleSearch(e.target.value)}}/>
        <div>
          {gifs.map((gif) => {
              // <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
              <h1>cu</h1>
            })}
        </div>
    </>
  )
}

export default App
