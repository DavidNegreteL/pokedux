import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from "./types";
import { getPokemonDetails } from "../api";

export const setPokemons = (payload: any) => ({
  type: SET_POKEMONS,
  payload,
});

export const setLoading = (payload: boolean) => ({
  type: SET_LOADING,
  payload,
});

// Todo: Add payload type to favorite
export const setFavorite = (payload: any) => ({
  type: SET_FAVORITE,
  payload,
});

export const getPokemonsWithDetails =
  (pokemons: [] = []) =>
  async (dispatch: any) => {
    const pokemonsDetailed = await Promise.all(
      pokemons.map((pokemon: any) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsDetailed));
  };
