import React from "react";
import Card from "../Components/Card";
import Section from "../Components/Section";

function Proyectos() {
  return (
    <div className="Proyectos">
      <div className="width-Proyectos">
        <div className="cont-Proyectos">
          <div className="Titte-Section">
            <Section text="Proyectos" />
          </div>
          <div className="item-proyectos">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
