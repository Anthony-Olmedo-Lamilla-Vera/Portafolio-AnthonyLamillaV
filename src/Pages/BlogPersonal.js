import React from "react";
import CardBlogPersonal from "../Components/CardBlogPersonal";
import Footer from "../Components/Footer";
import Section from "../Components/Section";
import Subtitulos from "../Components/Subtitulos";

function BlogPersonal() {
  return (
    <>
      <main>
        <div className="Blogpersonal">
          <div className="width-Proyectos">
            <div className="cont-blog">
              <div className="section-blogpersonal">
                <Section text="Blog Personal" />
              </div>
              <div className="subtitulo-blog">
                <Subtitulos text="Publicaciones" />
              </div>
              <div className="Card-BlogPersonal">
                <CardBlogPersonal />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default BlogPersonal;
