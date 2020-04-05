import React from "react";
import "../stylesheets/Main.scss";
import Form from "./Form";
import Card from "./Card";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   
        palette: "",
        name: "",
        job: "",
        email: "",
        phone: "",
        linkedin: "",
        github: ""
      
    };
  }

  handleReset() {
    // limpiará todos los valores
  }
 
  updateInputValue (data) {
        this.setState({
            name : "Maria José"
          })
    console.log(data)
      }

  render() {
    const handleInput = (data) => {
      console.log(data.value);
   
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
