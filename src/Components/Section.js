import React from "react";

function Section(props) {
  return (
    <div className="Sections">
      <div className="cont-Section">
        <h2 className="Text-Section">
          {props.text}
          <div className="diseno-section"></div>
        </h2>
      </div>
    </div>
  );
}

export default Section;
