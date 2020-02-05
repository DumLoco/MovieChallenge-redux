import React from "react";
import { Link } from "react-router-dom";

const Card = props => {
  const { Title, Released, Poster, imdbID } = props.movieList;

  return (
    <div className="col-sm">
      <div className="card">
        <img className="card-img-top" src={Poster} alt={Title} />
        <div className="card-body">
          <h4 className="card-title">{Title}</h4>
          <p className="card-text">{Released}</p>

          <Link to={`/${imdbID}`}>
            <button className="btn btn-primary">Ver detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
