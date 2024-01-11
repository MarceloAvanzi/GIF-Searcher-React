import React, { useState } from 'react';
import gifService from '../service/gif.service';
import SearchInput from '../components/SearchInput';

function Home() {
    const [data, setData] = useState([])
    const [query, setQuery] = useState()

    const handleInput = async (search) => {
        setQuery(search)
        setData(await gifService.getGifs(search))
    }

    return (
        <>
            <div>
                <h1>Gif Searcher</h1>
                {/* <input type='text' placeholder='Search gifs' onChange={(e) => {handleInput(e.target.value)}}  /> */}
                <SearchInput onSearch={handleInput} />
            </div>
            <div className="card">
                {query ? data.map((gif) => (
                    <a key={gif.id} href={gif.url} target="_blank">
                        <img src={gif.images.fixed_height.url} key={gif.id} className="logo react" alt="React logo" />
                    </a>
                )) : <p>Please write something</p>}
            </div>
        </>
    )
}

export default Home;