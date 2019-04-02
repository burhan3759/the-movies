const initState = {
    movies: [],
    movie: {},
}

const movieReducer = (state = initState, action) => {
    switch (action.type) {
        case 'value':
            return state;
        default:
            return state;
    }
};

export default movieReducer;