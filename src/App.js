import "./App.css";
import Rutas from "./Routes/Rutas";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import "./Style/Styles.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Rutas />
    </BrowserRouter>
  );
}

export default App;
