import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { movieList, movieSearch } from "./actions";
import CreateRoutes from "./routes.js";

const App = () => {
  const dispatch = useDispatch();
  const movSearch = useSelector(state => state.movieSearchReducer);
  const ListaTitulos = useSelector(state => state.movieListReducer);

  const search = event => {
    event.preventDefault();
    axios
      .get(`https://www.omdbapi.com/?apikey=fec0f00e&s=${movSearch}`)
      .then(res => res.data)
      .then(res => {
        if (res.Search === undefined) {
          dispatch(movieList([]));

          return;
        }

        const listMovies = res.Search.map(movie => movie);
        dispatch(movieList(listMovies));
      });
  };

  const handleForm = event => {
    dispatch(movieSearch(event.target.value));
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="separador"></div>
        <CreateRoutes
          handleForm={handleForm}
          search={search}
          ListaTitulos={ListaTitulos}
        />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
