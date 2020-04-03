import React from "react";
import "../stylesheets/Main.scss";
import Form from "./Form";
import Card from "./Card";

// this.state ={
//     palette: selectedPalette,
//     name: userName.value,
//     job: userJob.value,
//     mail: userMail.value,
//     phone: userPhone.value,
//     linkedin: userLinkedin.value,
//     github: userGithub.value
//    // }

const Main = () => (
  <section className="cards-page">
    <Form />
    <Card />
  </section>
);

export default Main;
