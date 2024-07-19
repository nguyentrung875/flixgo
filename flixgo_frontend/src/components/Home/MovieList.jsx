import React from 'react';
import Paginator from './Paginator';
import MovieItem from './MovieItem';

export default function MovieList() {
  return (
    <div>
      {/* catalog */}
      <div className="section section--catalog">
        <div className="container">
          <div className="row">
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />

            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />

          </div>
          <div className="row">
            {/* paginator */}
            <Paginator />
            {/* end paginator */}
          </div>
        </div>
      </div>
      {/* end catalog */}
    </div>)
}