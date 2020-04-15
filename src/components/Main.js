import React from "react";
import "../stylesheets/Main.scss";
import Form from "./Form";
import Card from "./Card";
import localStorage from "../localstorage/localStorage";
import woman from "../images/woman.png";

class Main extends React.Component {
  constructor(props) {
    super(props);
    const localStorageData = localStorage.get("user", {
      palette: "1",
      name: "",
      job: "",
      photo: woman,
      email: "",
      phone: "",
      linkedin: "",
      github: "",
    });
    this.state = localStorageData;
    this.handleInput = this.handleInput.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset() {
    this.setState({
      palette: "1",
      name: "",
      job: "",
      photo: woman,
      email: "",
      phone: "",
      linkedin: "",
      github: "",
    });
  }

  handleInput(data) {
    this.setState({
      palette: data.name === "palette" ? data.value : this.state.palette,
      name: data.name === "name" ? data.value : this.state.name,
      job: data.name === "job" ? data.value : this.state.job,
      email: data.name === "email" ? data.value : this.state.email,
      phone: data.name === "phone" ? data.value : this.state.phone,
      linkedin: data.name === "linkedin" ? data.value : this.state.linkedin,
      github: data.name === "github" ? data.value : this.state.github,
    });
  }

  handleImage(img) {
    this.setState({
      photo: img,
    });
  }
  componentDidUpdate() {
    const { name, job, photo, email, github, linkedin, phone, palette } = this.state;
    localStorage.set("user", { name, job, photo, email, github, linkedin, phone, palette });
  }
  render() {
    return (
      <section className="cards-page">
        <Form handleInput={this.handleInput} handleImage={this.handleImage} palette={this.state.palette} name={this.state.name} job={this.state.job} photo={this.state.photo} email={this.state.email} phone={this.state.phone} linkedin={this.state.linkedin} github={this.state.github} handleReset={this.handleReset} />
        <Card palette={this.state.palette} name={this.state.name} job={this.state.job} photo={this.state.photo} email={this.state.email} phone={parseInt(this.state.phone)} linkedin={this.state.linkedin} github={this.state.github} handleReset={this.handleReset} />
      </section>
    );
  }
}

export default Main;
