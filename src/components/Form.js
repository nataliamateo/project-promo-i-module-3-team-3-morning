import React from "react";
import "../stylesheets/Form.scss";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";

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
    </div>
  </form>
);

export default Form;
