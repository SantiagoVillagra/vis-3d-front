import Home from "./Components/Home/Home";
import Detail from "./Components/Detail/Detail";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div >
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/detail" element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
