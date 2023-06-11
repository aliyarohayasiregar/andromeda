// import { useState } from "react";

import Tombol from "./Tombol";

const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

export default function SolarSystem({
  index,
  setIndex,
  showMore,
  setShowMore,
}) {
  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <>
      <h1>{planets[index]}</h1>
      {showMore && <p>Planet ke-{index + 1} dalam tata surya.</p>}
      <Tombol onClick={handleMoreClick}>
        {showMore ? "Sembunyikan" : "Tampilkan"} detail
      </Tombol>
      <div style={{ display: "flex" }}>
        <Tombol onClick={() => setIndex(index - 1)} disabled={index === 0}>
          Sebelumnya
        </Tombol>
        <Tombol
          onClick={() => setIndex(index + 1)}
          disabled={index === planets.length - 1}
        >
          Berikutnya
        </Tombol>
      </div>
    </>
  );
}
