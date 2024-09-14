import {   configureStore } from "@reduxjs/toolkit";
import user from "../slice/userSlice";
import matches from "../slice/matchSlice";
import { rootReducers } from "./reducers";

export const store = configureStore({
    reducer:{
        data: rootReducers,
        user:user,
        matches:matches,
    }})