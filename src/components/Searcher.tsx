import { Input } from "antd";

const Searcher = () => {
  return (
    <Input.Search
      placeholder="Buscar pokemon"
      style={{ marginBottom: "2rem" }}
    />
  );
};

export default Searcher;
