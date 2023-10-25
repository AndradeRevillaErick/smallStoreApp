import { createSlice } from "@reduxjs/toolkit";
import { getPokemons } from "./thunks";

const initialState = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPokemons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPokemons.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pokemons = action.payload.pokemons;
        state.page = action.payload.page;
      })
      .addCase(getPokemons.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
