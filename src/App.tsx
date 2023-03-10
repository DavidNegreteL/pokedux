import { useEffect } from "react";
import { Col, Spin } from "antd";
import { shallowEqual, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import "antd/dist/reset.css";
import "./App.css";
import { fetchPokemonsWithDetails } from "./slices/dataSlice";

function App() {
  const pokemons = useSelector(
    (state: {
      data: {
        pokemons: {
          name: string;
          sprites: any;
          front_default: string;
          abilities: { ability: { name: string; url: string } }[];
          id: string;
          favorite: boolean;
        }[];
      };
    }) => state.data.pokemons,
    shallowEqual
  );

  const loading = useSelector((state: any) => state.ui.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails() as any);
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
