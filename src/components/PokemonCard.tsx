import { Card } from "antd";
import { useDispatch } from "react-redux";
import Meta from "antd/es/card/Meta";
import StarButton from "./StarButton";
import { setFavorite } from "../actions";

const PokemonCard = ({
  name,
  img,
  abilities,
  id,
  favorite,
}: {
  name: string;
  img: string;
  abilities: { ability: { name: string; url: string } }[];
  id: string;
  favorite: boolean;
}) => {
  const dispatch = useDispatch();

  const handleOnFavoriteClick = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };
  return (
    <Card
      title={name}
      cover={<img src={img} alt={img} />}
      extra={
        <StarButton isFavorite={favorite} onClick={handleOnFavoriteClick} />
      }
    >
      <Meta
        description={abilities
          .map((abilityObj) => abilityObj.ability.name)
          .join(", ")}
      />
    </Card>
  );
};

export default PokemonCard;
