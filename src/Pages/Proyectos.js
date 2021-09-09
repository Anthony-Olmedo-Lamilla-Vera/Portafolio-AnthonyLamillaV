import React from "react";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Section from "../Components/Section";
import AppNotas from "../IMG/Appnotas.png";
import Store from "../IMG/Store.png";

function Proyectos() {
  const descripcion = {
    primer: [
      "libreria React",
      "Crud de Datos",
      "Backend con Node ",
      "Pagos Mediante Paypal",
      "Deploy GitHub Pages",
    ],
    segundo: [
      "Crud Mongo Db ",
      "Peticiones Http ",
      "Api Rest ",
      "Api Rest Full ",
    ],
  };
  return (
    <>
      <main>
        <div className="Proyectos">
          <div className="width-Proyectos">
            <div className="cont-Proyectos">
              <div className="Titte-Section">
                <Section text="Proyectos" />
              </div>
              <div className="item-proyectos">
                <Card
                  img={Store}
                  descrip1={descripcion.primer}
                  link="https://antocraxx.github.io/StoreMuebles/"
                  repo="https://github.com/Antocraxx/StoreMuebles"
                />
                <Card
                  img={AppNotas}
                  descrip1={descripcion.segundo}
                  link="https://antocraxx.github.io/AplicacionWebNotas/"
                  repo="https://github.com/Antocraxx/AplicacionWebNotas"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
      <Footer />
    </>
  );
}

export default Proyectos;
