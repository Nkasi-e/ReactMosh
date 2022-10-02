import React, { Component } from "react";
import catalogue from "./resource/movies";
//Like component
import Like from "./common/Like";
// Pagination component
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";

class Movie extends Component {
  state = {
    movies: catalogue,
    pageSize: 5,
    currentPage: 1,
  };

  //Delete fn
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  // Like fn
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  //Handling Page change
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    // Dynamic conditional rendering
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies } = this.state;

    if (count === 0) return <p>There are no movies in the database</p>;

    //paginate page fn
    const moviePage = paginate(movies, currentPage, pageSize);

    return (
      <React.Fragment>
        <p>showing {count} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {moviePage.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentals}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movie;
