import React from 'react';
import '../../stylesheets/Form.scss';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import data from '../Collapsable/CollapsableHeader';
import Collapsable from '../Collapsable/Collapsable';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsableOpenId: data[0].id,
    };
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className='articles-container'>
        <div className='principal-column'>
          <Collapsable
            nameTitle={data[0].name}
            icons={data[0].icon}
            //  por defecto decimos que es open, es decir verdadero
            open={true}
          >
            <Design handleInput={this.props.handleInput} palette={this.props.palette} />
          </Collapsable>
          <Collapsable nameTitle={data[1].name} icons={data[1].icon}>
            <Fill handleImage={this.props.handleImage} handleInput={this.props.handleInput} formData={this.props.formData} />
          </Collapsable>
          <Collapsable nameTitle={data[2].name} icons={data[2].icon}>
            <Share createCardFetch={this.props.createCardFetch} isValidated={this.props.isValidated} url={this.props.formData.url} />
          </Collapsable>
        </div>
      </form>
    );
  }
}

export default Form;
