import React from 'react'

function Search(props) {
  return (
    <div className='search'>
      <input id='search' onChange={props.changed} placeholder='Search...'/>
    </div>
  )
}

export default Search;
