"use client"

import { createSlice } from "@reduxjs/toolkit";

export const cartSice = createSlice({
    name: "Cart",
    initialState:[],
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter((items) => items.id !== action.payload)
        }
    },

})

export const {add, remove} = cartSice.actions;
export default cartSice.reducer;
