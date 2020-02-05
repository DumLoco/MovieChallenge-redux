export const setTrue = () => {
  return {
    type: "SET TRUE"
  };
};

export const setFalse = () => {
  return {
    type: "SET FALSE"
  };
};

export const setMovie = movie => {
  return {
    type: "SET MOVIE",
    payload: movie
  };
};

export const movieSearch = movie => {
  return {
    type: "MOVIE SEARCH",
    payload: movie
  };
};

export const movieList = movie => {
  return {
    type: "SET MOVIE LIST",
    payload: movie
  };
};
