import "./App.css";
import Post from "./components/Post/Post";
import { ThreeDotIcon } from "./components/icons/TheeDotIcon/ThreeDotIcon";
import { SingleDot } from "./components/icons/SingleDot/SingleDot";

function App() {
  return (
    <div className="App">
      <Post
        imgUrl="https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244648_1280.jpg"
        imgAlt="Flowers"
        key="1"
        avatarUrl="https://static.vecteezy.com/system/resources/previews/001/840/618/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
        ThreeDotIcon={<ThreeDotIcon />}
        SingleDot={<SingleDot />}
      />
    </div>
  );
}

export default App;
