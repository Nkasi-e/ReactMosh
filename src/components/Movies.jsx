import React, { useState } from "react";
import catalogue from "./resource/movies";

const Movies = () => {
  const [show, setShow] = useState(catalogue);

  //Delete function
  const handleDelete = (shows) => {
    const show = show.filter((m) => m._id !== shows._id);
    setShow({ show });
  };

  // Dynamic conditional rendering
  const { length: count } = show;
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
        <tbody>
          {show.map((movies) => (
            <tr key={movies._id}>
              <td>{movies.title}</td>
              <td>{movies.genre.name}</td>
              <td>{movies.numberInStock}</td>
              <td>{movies.dailyRentals}</td>
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

export default Movies;
