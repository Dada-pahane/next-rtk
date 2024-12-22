'use client'
const { configureStore } = require("@reduxjs/toolkit");

import usersReducer from "./slice";
import todoreducer from "./todoSlice"

export const store = configureStore({

    reducer: {
        usersData: usersReducer,
        todosData: todoreducer
    }
})