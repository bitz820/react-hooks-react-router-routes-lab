import React from 'react'

function Movie({ film }) {
    const genreList = film.genres.map(genre => <li key={genre}>{genre}</li>)
    // console.log(genreList)
    return (
        <div>
            <h2>
                Movie: {film.title}
            </h2>
            <p>
                Run Time: {film.time}
            </p>
            <ul>
                {genreList}
            </ul>
        </div>
    )
}

export default Movie