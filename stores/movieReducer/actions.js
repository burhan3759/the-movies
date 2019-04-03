import http from '../../utils/http';
import store from '../index';

export const GET_MOVIES = 'GET_MOVIES';
export const ADD_FAV_MOVIE = 'ADD_FAV_MOVIE';

const getMovies = movies => ({ type: GET_MOVIES, payload: movies });
const addFavMovie = favMovies => ({ type: ADD_FAV_MOVIE, payload: favMovies });

const dummyData = [
	{
    id: 166428,
    poster_path: "/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
    release_date: "2019-01-03",
    title: "How to Train Your Dragon: The Hidden World",
    vote_average: 7.7,
    "vote_count": 1240,
  },
  {
    id: 299537,
    poster_path: "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
    release_date: "2019-03-06",
    title: "Captain Marvel",
    vote_average: 7.2,
    "vote_count": 3265,
  },
  {
    id: 329996,
    poster_path: "/ttN0czDnCpr64aj3ANGEf3DKE1L.jpg",
    release_date: "2019-03-27",
    title: "Dumbo",
    vote_average: 6.8,
	},
	{
    id: 450465,
    poster_path: "/svIDTNUoajS8dLEo7EosxvyAsgJ.jpg",
    release_date: "2019-01-16",
    title: "Glass",
    vote_average: 6.5,
  }
]

export const fetchMovies = (req = {}) => {
	return async dispatch => {
		try {
			if (http.API_KEY === 'API_KEY_HERE') {
				dispatch(getMovies(dummyData));
			} else {
				const response = await http.GET('/movie/popular', {});
				dispatch(getMovies(response));
			}
			
			req.success();
		} catch(err) {
			console.error(err);
			req.error();
		}
	};
}

export const toggleFavMovie = (movie) => {
	return async dispatch => {
		const { movieReducer: { favouriteMovies } } = store.getState();
		if (favouriteMovies.length > 0) {
			const i = favouriteMovies.map(m => m.id).indexOf(movie.id);

			if (i !== -1) {
				favouriteMovies.splice(i, 1);
			} else {
				favouriteMovies.push(movie);
			}
		} else {
			favouriteMovies.push(movie);
		}

		dispatch(addFavMovie(favouriteMovies));
	};
}