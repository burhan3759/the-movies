import { GET_MOVIES, ADD_FAV_MOVIE } from "./actions";

const initState = {
		movies: [],
		favouriteMovies: [],
    movie: {},
}

const movieReducer = (state = initState, action) => {
    switch (action.type) {
			case GET_MOVIES:
				return {
					...state,
					movies: action.payload,
				};
			case ADD_FAV_MOVIE:
				return {
					...state,
					favouriteMovies: action.payload,
				};
			default:
				return state;
    }
};

export default movieReducer;