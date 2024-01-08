import logo from "./logo.svg";
import "./App.css";
import Team from "./components/Team";
import Contact from "./components/contact";
import Map from "./components/Map";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./homepage";
// 

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
