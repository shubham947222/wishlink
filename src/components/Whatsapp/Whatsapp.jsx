import React from "react";
import "./whatsapp.css";

const Whatsapp = () => {
  return (
    <div>
      <a
        href="https://api.whatsapp.com/send?phone=7070095370&text=Hi!!%21%20I'm %20intrested%20in your %20busines."
        class="Whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa fa-whatsapp my-float"></i>
      </a>
    </div>
  );
};

export default Whatsapp;
