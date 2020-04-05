import React from "react";
import "../stylesheets/Main.scss";
import Form from "./Form";
import Card from "./Card";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        palette: "",
        name: "",
        job: "",
        mail: "",
        phone: "",
        linkedin: "",
        github: "",
      },
    };
  }

  handleReset() {
    // limpiará todos los valores
  }

  render() {
    const handleInput = (data) => {
      console.log("desde main", data);
    };
    return (
      <section className="cards-page">
        <Form handleInput={handleInput} />
        <Card name={this.state.name} job={this.state.job} handleReset={this.handleReset} />
      </section>
    );
  }
}

export default Main;
