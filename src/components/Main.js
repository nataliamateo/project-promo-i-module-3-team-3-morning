import React from "react";
import "../stylesheets/Main.scss";
import Form from "./Form";
import Card from "./Card";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palette: 1,
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleReset() {
    // limpiará todos los valores
  }

  handleInput(data) {
    debugger;
    this.setState({
      palette: data.name.value,
      name: data.name ? data.name : data.value,
      job: data.value,
      email: data.value,
      phone: data.value,
      linkedin: data.value,
      github: data.value,
    });
  }

  render() {
    const handleInput = (data) => {
      console.log(data);
    };
    return (
      <section className="cards-page">
        <Form handleInput={handleInput} />
        <Card palette={this.state.palette} name={this.state.name} job={this.state.job} handleReset={this.handleReset} handleInput={this.handleInput} />
      </section>
    );
  }
}

export default Main;
