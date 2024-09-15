import { combineReducers } from 'redux';
import userReducer from '../slice/userSlice'; // Import your actual user reducer
import matchesReducer from '../slice/matchSlice'; // Import your actual matches reducer

export const rootReducer = combineReducers({
    user: userReducer,
    matches: matchesReducer,
    // Add other reducers if needed
});
