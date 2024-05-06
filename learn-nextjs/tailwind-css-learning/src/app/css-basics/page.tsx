import React from "react";
import "./style.css";

const paragraphStyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

const page = () => {
  return (
    <div>
      {/* inline styling */}
      <h1 style={{ color: "red" }}>CSS basics</h1>
      {/* {external styling} */}
      <h2>Tag Selector styling</h2>
      <h2 className="blue-head">Tag + Class Selector styling</h2>
      <h2 id="h0" className="blue-head">
        CSS External Styling w.r.t tagname + class + id
      </h2>
      <h2 className="blue-head">Tag + Class Selector styling</h2>

      {/* {style in a variable} */}
      <p style={paragraphStyle} id="h0">
        This is a paragraph
      </p>
    </div>
  );
};

export default page;
