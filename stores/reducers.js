import { combineReducers } from 'redux';
import movieReducer from './movieReducer/reducer';

const reducers = combineReducers({
    movieReducer,
});

export default reducers;