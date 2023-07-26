import React from "react";

export default function SubHero({ img, classStyle }) {
  return (
    <section className="hero">
      <div className={classStyle} style={{ backgroundImage: `url(${img})` }} />
    </section>
  );
}
