export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //REMOVE after finishing developement...
  // token:
  //   "BQBkrO5xOiDj8PiG8H6ID1tuctO5c10lV--dttpR3rl_uJkKT2FWarIjImBRgRJz4PaHvSKTlmRt3QrorNUzWwhR7MOnq8A3S0MKLv3b53Io99a1oThyyYJmqqEJdTRfpS2RzUJqbBUbZ7TIicfpGDMIDjLpTP9fwo8VfCp1lhcB3-EvEAey",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
