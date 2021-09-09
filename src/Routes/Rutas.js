import React from "react";
import { Route, Switch } from "react-router";
import Home from "../Pages/Home";
import Proyectos from "../Pages/Proyectos";
import BlogPersonal from "../Pages/BlogPersonal";
import "../Style/Styles.css";

function Rutas() {
  return (
    <Switch>
      <Route exact path="/Home">
        <Home />
      </Route>
      <Route exact path="/Projects">
        <Proyectos />
      </Route>
      <Route exact path="/Blog-Personal">
        <BlogPersonal />
      </Route>
    </Switch>
  );
}

export default Rutas;
