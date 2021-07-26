import React from 'react';

import MovieItem from './MovieItem';

function MovieList({ movies, onOverviewClick, overviewId }) {

    console.log(movies)

    return (
        <section>
            <ul className="movie_list">
                {movies.map(movie => {
                    return <MovieItem key={movie.id} onOverviewClick={onOverviewClick} movie={movie} overviewId={overviewId}/>
                })}
            </ul>
        </section>
    )
}

export default MovieList;