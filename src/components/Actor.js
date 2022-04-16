import React from 'react'

function Actor({data}) {
    const renderMovies = data.movies.map(item => <li key={item}>{item}</li>)

  return (
    <div>
        <h1>{data.name}</h1>
        <h3>Films</h3>
        <ul>
            {renderMovies}
        </ul>
    </div>
  )
}

export default Actor