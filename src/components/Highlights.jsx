import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Highlights = () => {

  useGSAP(()=>{
    gsap.to("#title",{})
  })

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end justify-between">
          <h1 id="title" className="section-heading">
            The Highlights
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
