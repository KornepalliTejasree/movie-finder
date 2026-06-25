import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favMovies = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favMovies);
  }, []);

  return (
    <div className="favorites page-content">
      <div className="favorites-header">
        <h1>Favorite Movies</h1>
        <p>Keep your must-watch list handy and revisit favorites anytime.</p>
      </div>

      {favorites.length === 0 ? (
        <div className="empty-state">
          <h3>No favorite movies added yet.</h3>
          <p>Browse films on the home page and tap the heart to save your next watch.</p>
        </div>
      ) : (
        <div className="favorites-grid">
          {favorites.map((movie) => (
            <article className="favorite-card" key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} />
              <div className="favorite-card-body">
                <div>
                  <h3>{movie.Title}</h3>
                  <p>{movie.Year}</p>
                </div>
                <Link to={`/movie/${movie.imdbID}`} className="button-link">
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;