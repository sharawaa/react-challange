import "./styles/App.css";
//import Pagination from "./components/Pagination";
import { Route, Routes } from "react-router-dom";

import Page from "./components/Page";
import HtmlComponent from "./components/HtmlComponent";
import CssComponent from "./components/CssComponent";
import JavascriptComponent from "./components/JavascriptComponent";
import ReactComponent from "./components/ReactComponent";
import NavBar from "./components/subComponent/NavBar";

function App() {
  return (
    <div className="container appContainer">
      <NavBar />
      <div>
        <Routes>
          <Route path="/" />
          <Route path="/html" element={<HtmlComponent />} />
          <Route path="/css" element={<CssComponent />} />
          <Route path="/javascript" element={<JavascriptComponent />} />
          <Route path="/react" element={<ReactComponent />} />
          {/* <Route path="/page/:id" element={<Page />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
