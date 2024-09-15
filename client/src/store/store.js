import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import matchesReducer from "../slice/matchSlice";
import { rootReducer } from "./reducers"; // Ensure this file exists and exports rootReducer

export const store = configureStore({
    reducer: {
        data: rootReducer, // Ensure rootReducer is correctly combined
        user: userReducer,
        matches: matchesReducer,
    }
});
