const movieListReducer = (
  state = [
    {
      Title: "Aliens",
      Year: "1986",
      imdbID: "tt0090605",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      Title: "Predator",
      Year: "1987",
      imdbID: "tt0093773",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BY2QwYmFmZTEtNzY2Mi00ZWMyLWEwY2YtMGIyNGZjMWExOWEyXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
    },
    {
      Title: "The Matrix",
      Year: "1999",
      imdbID: "tt0133093",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    }
  ],

  action
) => {
  switch (action.type) {
    case "SET MOVIE LIST":
      return action.payload;

    default:
      return state;
  }
};

export default movieListReducer;
