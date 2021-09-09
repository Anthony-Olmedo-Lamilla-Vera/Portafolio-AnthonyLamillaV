import React from "react";
import { Route, Switch } from "react-router";
import Home from "../Pages/Home";
import Proyectos from "../Pages/Proyectos";
import BlogPersonal from "../Pages/BlogPersonal";
import "../Style/Styles.css";

function Rutas() {
  return (
    <Switch>
      <Route exact path="/Portafolio-AnthonyLamillaV/">
        <Home />
      </Route>
      <Route exact path="/Portafolio-AnthonyLamillaV/Projects">
        <Proyectos />
      </Route>
      <Route exact path="/Portafolio-AnthonyLamillaV/Blog-Personal">
        <BlogPersonal />
      </Route>
    </Switch>
  );
}

export default Rutas;
