import { useContext } from "react";
import "./App.css";
import LeftBox from "./Components/LeftBox";
import Rightbox from "./Components/Rightbox";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const { isLight } = useContext(ThemeContext);
  return (
    <div className={`App ${isLight ? "light" : "dark"}`}>
      <LeftBox />
      <Rightbox />
    </div>
  );
}

export default App;
