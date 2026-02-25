import { createSlice, configureStore } from '@reduxjs/toolkit';
import todoReducer from "../features/todo/todoSlice.js";


//creating store..
export const store = configureStore({
    reducer: todoReducer,
}) 