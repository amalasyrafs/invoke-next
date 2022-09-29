import React from "react";
import Landing from "../components/Meniaga/landing";
import Intro from "../components/Meniaga/intro";
import Foc from "../components/Meniaga/foc";
import Platform from "../components/Meniaga/platform";
import Community from "../components/Meniaga/community";

export default function Meniaga() {
  return (
    <div className="flex flex-col">
      <Landing />
      <Intro />
      <Foc />
      <Platform />
      <Community />
    </div>
  );
}
