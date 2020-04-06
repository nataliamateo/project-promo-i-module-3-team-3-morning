import React from "react";
import "../stylesheets/Form.scss";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";
import data from './CollapsableHeader';
import Collapsable from './Collapsable';

<<<<<<< HEAD
const Form = props => (
  <form action="" method="POST" className="articles-container">
    <div className="principal-column">
      {/* <Collapsable> */}
      <Design handleInput={props.handleInput} />
      {/* </Collapsable> */}
      {/* <Collapsable> */}
      <Fill handleInput={props.handleInput} />
      {/* </Collapsable> */}
      {/* <Collapsable> */}
      <Share />
      {/* // </Collapsable> */}
=======

class Form extends React.Component{
  constructor(props) {
    super(props);
  }
   render(){
    return(
  <form action="" method="POST" class="articles-container">
    <div class="principal-column">
   
      <Collapsable 
       nameTitle = {data[0].name}
       icons = {data[0].icon}
      //  por defecto decimos que es open, es decir verdadero
       open = {true}
       >
        <Design/>     
      </Collapsable>
      <Collapsable
      nameTitle = {data[1].name}
      icons = {data[1].icon}> 
        <Fill handleInput={this.props.handleInput} />
       </Collapsable>
          <Collapsable
          nameTitle={data[2].name}
          icons = {data[2].icon} > 
      <Share     
      />
      </Collapsable>
>>>>>>> Collapsable
    </div>
  </form>
  )
 }   
 }

export default Form;
