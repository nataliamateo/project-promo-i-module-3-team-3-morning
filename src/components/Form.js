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
  }
  render() {
    return (
      <form action='' method='POST' class='articles-container'>
        <div class='principal-column'>
          <Collapsable
            nameTitle={data[0].name}
            icons={data[0].icon}
            //  por defecto decimos que es open, es decir verdadero
            open={true}
          >
            <Design handleInput={this.props.handleInput} />
          </Collapsable>
          <Collapsable nameTitle={data[1].name} icons={data[1].icon}>
            <Fill handleInput={this.props.handleInput} />
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
