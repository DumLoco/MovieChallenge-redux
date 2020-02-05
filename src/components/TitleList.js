import React from "react";
import Card from "./Card";

class TitleList extends React.Component {
  render() {
    const { titles } = this.props;

    return (
      <div className="nada">
        <div className="container">
          <div className="row">
            {titles.length > 0 ? (
              titles.map(movie => (
                <Card
                  movieList={movie}
                  movieID={movie.imdbID}
                  key={movie.imdbID}
                />
              ))
            ) : (
              <p>
                No se encontró la película. Por favor ingresá un título
                existente.
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default TitleList;
