import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFalse, setTrue, setMovie } from "../actions/index.js";

const Details = ({ match }) => {
  useEffect(() => {
    fetchPeli();

    console.log(match);
  }, []);
  const peli = useSelector(state => state.movieReducer);
  const loading = useSelector(state => state.loadingReducer);
  const dispatch = useDispatch();

  const fetchPeli = async () => {
    dispatch(setTrue());
    const fetchPeli = await fetch(
      `https://www.omdbapi.com/?apikey=fec0f00e&i=${match.params.id}&plot=short`
    );
    const pelicula = await fetchPeli.json();
    console.log(pelicula);
    dispatch(setMovie(pelicula));
    dispatch(setFalse());
  };

  return (
    <div>
      {loading === true ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="card2">
          <div className="card-header2">
            <h3>Detalles</h3>
          </div>

          <div className="card-body2">
            <div className="img-container">
              <img alt="poster" src={peli.Poster}></img>
            </div>
            <blockquote>
              <h1>{peli.Title}</h1>
              <h4>Director: {peli.Director}</h4>
              <h4>Año: {peli.Year}</h4>
              <h4>Cast: {peli.Actors}</h4>
              <p>{peli.Plot}</p>

              <Link className="btn btn-primary" to="/">
                Volver
              </Link>
            </blockquote>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
