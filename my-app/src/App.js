import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./PartTimeCalculation/Pages/Home";

function App() {
  return (
    <Routes>
      <Route path={"/"} Component={Home}></Route>
    </Routes>
  );
}

export default App;
