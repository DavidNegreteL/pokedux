import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from "./uiSlice";
import { getPokemon, getPokemonDetails } from "../api";

const initialState = {
  pokemons: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  "data/fetchPokemonsWithDetails",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));

    const pokemonsRes = await getPokemon();

    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map((pokemon: any) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = (state as any).pokemons.findIndex(
        (pokemon: { id: string }) => {
          return (pokemon as any).id === action.payload.pokemonId;
        }
      );
      if (currentPokemonIndex >= 0) {
        const isFavorite = (state as any).pokemons[currentPokemonIndex]
          .favorite;
        (state as any).pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },
  },
});

export const { setFavorite, setPokemons } = dataSlice.actions;

export default dataSlice.reducer;
