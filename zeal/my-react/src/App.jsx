import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import gifService from './service/gif.service'
import SearchInput from './components/SearchInput'

function App() {
  const [data, setData] = useState([])
  const [query, setQuery] = useState()

  const handleInput = async (search) => {
    setQuery(search)
    setData(await gifService.getGifs(search))
  }

  // useEffect(() => {
  //   console.log(data)
  // }, [data])

  return (
    <>
      <div>
        <h1>Gif Searcher</h1>
        {/* <input type='text' placeholder='Search gifs' onChange={(e) => {handleInput(e.target.value)}}  /> */}
        <SearchInput onSearch={handleInput} />
      </div>
        {/* <button type='submit'>
          Submit
        </button> */}
      <div className="card">
        {query ? data.map((gif) => (
          <a href={gif.url} target="_blank">
            <img src={gif.images.fixed_height.url} key={gif.id} className="logo react" alt="React logo" />
          </a>

        )) : <p>Please write something</p>}
      </div>
    </>
  )
}

export default App
