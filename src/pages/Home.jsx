import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Movie from "../components/Movie";
import "../App.css"
const Home = () => {
  const [search, setSearch] = useState("batman");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?apikey=c6a95e11&s=${search}`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.Search || []));
  }, [search]);

  return (
    <div className="home">
      <SearchBar search={search} setSearch={setSearch} />

      <div className="movie-grid">
        {movies.map((m) => (
          <Movie key={m.imdbID} movie={m} />
        ))}
      </div>
    </div>
  );
};

export default Home;