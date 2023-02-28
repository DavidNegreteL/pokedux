import { fromJS } from "immutable";
import { SET_POKEMONS, SET_FAVORITE } from "../actions/types";

const initialState = fromJS({
  pokemons: [],
});

export const pokemonsReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case SET_POKEMONS:
      return state.setIn(["pokemons"], fromJS(action.payload));
    case SET_FAVORITE:
      const currentPokemonIndex = (state as any)
        .get("pokemons")
        .findIndex((pokemon: { id: string }) => {
          return (pokemon as any).get("id") === action.payload.pokemonId;
        });
      if (currentPokemonIndex < 0) return state;

      const isFavorite = state.getIn([
        "pokemons",
        currentPokemonIndex,
        "favorite",
      ]);
      return state.setIn(
        ["pokemons", currentPokemonIndex, "favorite"],
        !isFavorite
      );
    default:
      return state;
  }
};
