import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css"
const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=c6a95e11&i=${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <h2>Loading...</h2>;
   const addToFavorites = () => {
  const favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

  const exists = favorites.find(
    (fav) => fav.imdbID === movie.imdbID
  );

  if (!exists) {
    favorites.push(movie);
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }
};
  return (
    <div className="movie-details">
      <img src={movie.Poster} alt={movie.Title} />
       <div className="details-info">
        <h1>{movie.Title}</h1>
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Runtime:</strong> {movie.Runtime}</p>
        <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
      </div>
    </div>
  );
};

export default MovieDetails;