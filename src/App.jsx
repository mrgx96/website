import "../public/styles.css";
import Container from "./Container";
import Header from "./Header.jsx";
import Body from "./Body.jsx";

export default function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Body />
      </div>
    </div>
  );
}
