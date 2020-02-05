const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case "SET TRUE":
      return true;
    case "SET FALSE":
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
