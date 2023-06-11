// import { useState } from "react";

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
      <button onClick={handleMoreClick}>
        {showMore ? "Sembunyikan" : "Tampilkan"} detail
      </button>
      <div style={{ display: "flex" }}>
        <button onClick={() => setIndex(index - 1)} disabled={index === 0}>
          Sebelumnya
        </button>
        <button
          onClick={() => setIndex(index + 1)}
          disabled={index === planets.length - 1}
        >
          Berikutnya
        </button>
      </div>
    </>
  );
}
