import React, { useState } from "react";
import { getMovies } from "../components/";

const Movies = () => {
  const [movie, setMovie] = useState(getMovies());

  //Delete function
  const handleDelete = (movie) => {
    const movies = movies.filter((m) => m.id !== movie.id);
    setMovie({ movies });
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
            <th>del</th>
          </tr>
        </thead>
      </table>
      <tbody>
        {/*map a list of item here and use the object dot notation to access them */}
        <tr>
          <td>{3 + 3}</td>
          <td>{9 + 9}</td>
          <td>{7 + 8}</td>
          <td>{6 + 8}</td>
          <td>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(movie)}
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </div>
  );
};

export default Movies;
