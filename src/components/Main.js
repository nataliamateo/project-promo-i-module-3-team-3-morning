import React from 'react';
import '../stylesheets/Main.scss';
import Form from './Form';
import Card from './Card';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palette: '1',
      name: 'algo',
      job: '',
      img: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }

  handleReset() {
    // limpiará todos los valores
  }

  updateInputValue(data) {
    this.setState({
      name: 'Maria José',
    });
    console.log(data);
  }

  handleInput(data) {
    console.log(data);
    
    this.setState({
      palette: data.name === 'palette' ? data.value : this.state.palette,
      name: data.name === 'name' ? data.value : this.state.name,
      job: data.name === 'job' ? data.value : this.state.job,
      email: data.name === 'email' ? data.value : this.state.email,
      phone: data.name === 'phone' ? data.value : this.state.phone,
      linkedin: data.name === 'linkedin' ? data.value : this.state.linkedin,
      github: data.name === 'github' ? data.value : this.state.github,
    });
  }
  handleImage(img) {
    this.setState({
      img: img,
    });
  }

  render() {
    console.log(this.state);
    
    return (
      <section className='cards-page'>
        <Form handleInput={this.handleInput} handleImage={this.handleImage} palette={this.state.palette} name={this.state.name} job={this.state.job} img={this.state.img} email={this.state.email} phone={this.state.phone} linkedin={this.state.linkedin} github={this.state.github}/>
        <Card palette={this.state.palette} name={this.state.name} job={this.state.job} img={this.state.img} email={this.state.email} phone={this.state.phone} linkedin={this.state.linkedin} github={this.state.github} handleReset={this.handleReset} />
      </section>
    );
  }
}

export default Main;
