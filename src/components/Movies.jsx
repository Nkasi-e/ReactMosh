import React, { useState } from "react";
import catalogue from "./resource/movies";
import Like from "./common/Like";

const Movie = () => {
  const [movie, setMovies] = useState(catalogue);

  //Delete function
  const handleDelete = (movi) => {
    const movies = movie.filter((m) => m._id !== movi._id);
    setMovies({ movies });
  };

  // Like fn
  const handleLike = (movi) => {
    const movies = [...movie];
    const index = movies.indexOf(movi);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    setMovies({ movies });
  };

  // Dynamic conditional rendering
  const { length: count } = movie;
  if (count === 0) return <p>There are no movies in the database</p>;

  return (
    <div>
      <p>showing {count} movies in the database</p>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movie.map((movies) => (
            <tr key={movies._id}>
              <td>{movies.title}</td>
              <td>{movies.genre.name}</td>
              <td>{movies.numberInStock}</td>
              <td>{movies.dailyRentals}</td>
              <td>
                <Like liked={movies.liked} onClick={() => handleLike(movies)} />
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(movies)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Movie;
