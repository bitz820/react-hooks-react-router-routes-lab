import React from "react";
import { movies } from "../data";
import Movie from "./Movie"


const renderMovies = movies.map(film =>  <Movie key={film.title} film={film} />)

function Movies() {
  return <>
    <h1>Movies Page</h1>
    {renderMovies}
    </>;
}

export default Movies;
