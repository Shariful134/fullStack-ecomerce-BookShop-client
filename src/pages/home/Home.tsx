import { Divider } from "antd";
import Carosel from "../../components/carosel/Carosel";
import GetBooks from "../books/GetBooks";

const Home = () => {
  return (
    <div>
      <Carosel></Carosel>
      <Divider style={{ color: "#24A9E1" }}>All Books </Divider>
      <GetBooks></GetBooks>
    </div>
  );
};

export default Home;
