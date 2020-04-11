import React from 'react';

class ColorRadio extends React.Component {
  render() {
    return (
      <>
        <div className={this.props.colorA}></div>
        <div className={this.props.colorB}></div>
        <div className={this.props.colorC}></div>
      </>
    );
  }
}

export default ColorRadio;
