import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonApi } from "../../../api/pokeapi/pokemonApi";

export const getPokemons = createAsyncThunk(
  "pokemons/paginate",
  async (page) => {
    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );

    return { pokemons: data.results, page };
  }
);
