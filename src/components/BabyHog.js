import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

function BabyHog(props) {
  const [weight, setWeight] = useState(200);// is there a way we could associate eye color string values with images?

const eyeColorMapper = {
  blue: BlueBaby,
  sun:SunBaby,
  glowing: GlowingBaby,
}; // perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

  function handleChangeWeight(e) {
    const change = e.target.name === "+" ? 10 : -10; // how can we reuse this for both buttons?
    setWeight((prevWeight) => prevWeight + change);// perhaps something with e.target.name === "+"
  }

  return (
    <li className="hogbabies">
      <h1>{props.name}</h1>
      <h3>Weight: {weight}</h3>
      <h3>Hobby: {props.hobby}</h3>
      <h4>Eye Color: {props.eyeColor}</h4>

      <button name="+" onClick= {handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick= {handleChangeWeight}>Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={eyeColorMapper[props.eyeColor] || normalBaby}
          style={{ height: `${weight}px` }}
          alt={props.name}
        />
      </div>
    </li>
  );
}

export default BabyHog;
