import Movie from './components/Movies';
import { Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Customer from './components/Customer';
import MovieForm from './components/MovieForm';
import Rentals from './components/Rentals';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="container">
        <Routes>
          <Route exact path="movies" element={<Movie />} />
          <Route exact path="customers" element={<Customer />} />
          <Route exact path="rentals" element={<Rentals />} />
          <Route exact path="movies/:id" element={<MovieForm />} />
          <Route exact path="*" element={<NotFound />} />
          <Route exact path="/" element={<Navigate to="movies" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
