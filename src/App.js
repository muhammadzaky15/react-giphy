import "./App.css";
import { Routes, Route } from "react-router-dom"
import Home from "./page/Home";
import IronManPage from "./page/IronManPage";
import SearchPage from "./page/SearchPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="iron-man" element={ <IronManPage/> } />
        <Route path="search" element={ <SearchPage/> } />
      </Routes>
    </div>
  );
}

export default App;
