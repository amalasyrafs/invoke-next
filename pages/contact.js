import React from "react";
import Email from "../components/Contact/email";
import Form from "../components/Contact/form";
import Map from "../components/Contact/map";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <Form />
      <Email />
      <Map />
    </div>
  );
}
