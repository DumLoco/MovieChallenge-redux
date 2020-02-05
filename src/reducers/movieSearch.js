const movieSearchReducer = (state = "", action) => {
  switch (action.type) {
    case "MOVIE SEARCH":
      return (state = action.payload);
    default:
      return state;
  }
};

export default movieSearchReducer;
