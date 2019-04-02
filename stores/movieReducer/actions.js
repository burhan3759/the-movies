export const GET_MOVIES = 'GET_MOVIES';

const getMovies = movies => ({ type: GET_MOVIES, payload: movies });

export const fetchMovies = (req = {}) => {
    return async dispatch => {

    }
}