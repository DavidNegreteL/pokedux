import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button } from "antd";

const StarButton = ({
  isFavorite,
  onClick,
}: {
  isFavorite: boolean;
  onClick: () => void;
}) => {
  const Icon = isFavorite ? StarFilled : StarOutlined;
  return <Button icon={<Icon />} onClick={onClick}></Button>;
};

export default StarButton;
