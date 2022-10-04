import Movie from "./components/Movies";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import Home from "./components/Home";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <main className="container">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="products" element={<Product />} />
          <Route exact path="post" element={<Post />} />
          <Route exact path="movies" element={<Movie />} />

          {/*Route Parameter*/}
          <Route exact path="movies/:action" element={<Movie />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
