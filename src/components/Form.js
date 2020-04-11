import React from 'react';
import '../stylesheets/Form.scss';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import data from './CollapsableHeader';
import Collapsable from './Collapsable';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsableOpenId: data[0].id,
    };
  }
  render() {
    return (
      <form action="" method="POST" className="articles-container">
        <div className="principal-column">
          <Collapsable
            nameTitle={data[0].name}
            icons={data[0].icon}
            //  por defecto decimos que es open, es decir verdadero
            open={true}
          >
            <Design handleInput={this.props.handleInput} />
          </Collapsable>
          <Collapsable nameTitle={data[1].name} icons={data[1].icon}>
            <Fill handleImage={this.props.handleImage} handleInput={this.props.handleInput} name={this.props.name} job={this.props.job} img={this.props.img} email={this.props.email} phone={this.props.phone} linkedin={this.props.linkedin} github={this.props.github} />
          </Collapsable>
          <Collapsable nameTitle={data[2].name} icons={data[2].icon}>
            <Share />
          </Collapsable>
        </div>
      </form>
    );
  }
}

export default Form;
