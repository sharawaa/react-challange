import "./styles/App.css";
import Pagination from "./components/Pagination";
import { Route, Routes } from "react-router-dom";

import Page from "./components/Page";

function App() {
  return (
    <div className="container appContainer">
      <Routes>
        <Route path="/page/:id" element={<Page />} />
      </Routes>
      <Pagination />
    </div>
  );
}

export default App;
