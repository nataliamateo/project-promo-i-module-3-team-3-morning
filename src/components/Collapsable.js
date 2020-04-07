import React from "react";
import "../stylesheets/Collapsable.scss";

class Collapsable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // como queremos que uno este abierto por defecto hay que hacer un if en el estado
      collapsable: props.open ? "open" : "hidden",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      let collapsablesDisplay;
      if (prevState.collapsable === "hidden") {
        collapsablesDisplay = "open";
      } else {
        // const collapsables = collapsablesDisplay.map((collapsable) => {
        collapsablesDisplay = "hidden";
      }
      // collapsablesDisplay = "open";
      return {
        collapsable: collapsablesDisplay,
      };
    });
  }

  render() {
    return (
      <fieldset className={`${this.state.collapsable}  collapsible`}>
        <div className="collapsible__header" onClick={this.handleClick}>
          <i className={`${this.props.icons} collapsible__header--icon`}></i>
          <h2 className="collapsible__header--title">{this.props.nameTitle}</h2>
          <i className="fas fa-chevron-up collapsible__header--arrow-icon"></i>
        </div>
        <div className="collapsible__content">{this.props.children}</div>
      </fieldset>
    );
  }
}

export default Collapsable;
