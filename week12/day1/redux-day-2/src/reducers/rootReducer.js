const initialState = {
  user: "Amanda",
  weather: { weather: [] },
  location: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state };
    case "SET_WEATHER":
      return { ...state, weather: action.payload };
    case "SET_LOCATION":
      return { ...state, location: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
