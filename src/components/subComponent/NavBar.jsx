import { useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="navBar">
      <button
        className="sideBtn"
        onClick={() => {
          navigate("/html");
        }}
      >
        Html
      </button>
      <button
        onClick={() => {
          navigate("/css");
        }}
      >
        css
      </button>
      <button
        onClick={() => {
          navigate("/javascript");
        }}
      >
        java script
      </button>
      <button
        onClick={() => {
          navigate("/react");
        }}
      >
        react
      </button>
    </div>
  );
}
