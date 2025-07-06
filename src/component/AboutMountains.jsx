import React from "react";
import "./component.css";

import everest from "/src/img/everest.jpg";
import annapurna from "/src/img/annapurna.jpg";
import dhaulagiri from "/src/img/dhaulagiri.jpg";
import manaslu from "/src/img/manaslu.jpg";
import lhotse from "/src/img/lhotse.jpg";
import makalu from "/src/img/makalu.jpg";
import choOyu from "/src/img/choOyu.jpg";
import kanchenjunga from "/src/img/kanchenjunga.jpg";

const mountains = [
  { name: "Mount Everest", rankNepal: 1, rankWorld: 1, img: everest },
  { name: "Annapurna I", rankNepal: 8, rankWorld: 10, img: annapurna },
  { name: "Dhaulagiri I", rankNepal: 6, rankWorld: 7, img: dhaulagiri },
  { name: "Manaslu", rankNepal: 7, rankWorld: 8, img: manaslu },
  { name: "Lhotse", rankNepal: 3, rankWorld: 4, img: lhotse },
  { name: "Makalu", rankNepal: 4, rankWorld: 5, img: makalu },
  { name: "Cho Oyu", rankNepal: 5, rankWorld: 6, img: choOyu },
  { name: "Kanchenjunga", rankNepal: 2, rankWorld: 3, img: kanchenjunga },
];

function AboutMountains() {
  return (
    <div style={{ background: "#15516b" }}>
      <h2
        style={{
          textAlign: "center",
          color: "white",
          paddingTop: "30px",
        }}
      >
        Touching the Sky: The Peaks of Nepal
      </h2>
      <div className="mountain-layout">
        <div className="mountain-row">
          {mountains.slice(0, 3).map((m, i) => (
            <MountainCard key={i} mountain={m} />
          ))}
        </div>
        <div className="mountain-row">
          {mountains.slice(3, 6).map((m, i) => (
            <MountainCard key={i + 3} mountain={m} />
          ))}
        </div>
        <div className="mountain-row center-row">
          {mountains.slice(6, 8).map((m, i) => (
            <MountainCard key={i + 6} mountain={m} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MountainCard({ mountain }) {
  return (
    <div className="card">
      <img src={mountain.img} alt={mountain.name} />
      <div className="card-overlay">
        <h3>{mountain.name}</h3>
        <p>Nepal Rank: {mountain.rankNepal}</p>
        <p> World Rank: {mountain.rankWorld}</p>
      </div>
    </div>
  );
}

export default AboutMountains;
