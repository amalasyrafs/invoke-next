import React from "react";
import Landing from "../components/Adnexio/landing";
import Definition from "../components/Adnexio/definition";
import HowTo from "../components/Adnexio/howto";
import Disruptive from "../components/Adnexio/disruptive";
import DmAds from "../components/Adnexio/dmads";
import Visit from "../components/Adnexio/visit";

export default function Adnexio() {
  return (
    <div className="flex flex-col">
      <Landing />
      <Definition />
      <HowTo />
      <Disruptive />
      <DmAds />
      <Visit />
    </div>
  );
}
