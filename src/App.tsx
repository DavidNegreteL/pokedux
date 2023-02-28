import { useEffect } from "react";
import { Col, Spin } from "antd";
import { shallowEqual, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { getPokemon } from "./api";
import { getPokemonsWithDetails, setLoading } from "./actions";
import "antd/dist/reset.css";
import "./App.css";

function App() {
  const pokemons = useSelector(
    (state: {
      pokemons: {
        name: string;
        sprites: any;
        front_default: string;
        abilities: { ability: { name: string; url: string } }[];
        id: string;
        favorite: boolean;
      }[];
    }) => {
      return (state as any).getIn(["data", "pokemons"], shallowEqual).toJS();
    }
  );
  const loading = useSelector((state: { loading: boolean }) =>
    (state as any).get(["ui", "loading"])
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes) as any);
      dispatch(setLoading(false));
    };
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      Pokedux
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
