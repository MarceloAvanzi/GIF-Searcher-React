import React from 'react';

// import { Container } from './styles';

function SearchInput(prop) {
  return (
    <>
        <input type='text' placeholder='Search gifs' onChange={(e) => {prop.onSearch(e.target.value)}}  />
    </>
  )
}

export default SearchInput;