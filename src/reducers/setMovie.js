const movieReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET MOVIE":
      return (state = action.payload);
    default:
      return state;
  }
};

export default movieReducer;
