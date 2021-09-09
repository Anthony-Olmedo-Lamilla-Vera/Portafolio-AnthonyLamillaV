import React from "react";
import CardBlogPersonal from "../Components/CardBlogPersonal";
import Section from "../Components/Section";
import Subtitulos from "../Components/Subtitulos";

function BlogPersonal() {
  return (
    <div className="Blogpersonal">
      <div className="width-Proyectos">
        <div className="cont-blog">
          <div className="section-blogpersonal">
            <Section text="Blog Personal" />
          </div>
          <Subtitulos text="Publicaciones" />
          <div className="Card-BlogPersonal">
            <CardBlogPersonal />
            <CardBlogPersonal />
            <CardBlogPersonal />
            <CardBlogPersonal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPersonal;
