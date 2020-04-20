import React from 'react';
import '../stylesheets/Main.scss';
import Form from './Form/Form';
import Card from './Card/Card';
import localStorage from '../localstorage/localStorage';
import woman from '../images/woman.png';

class Main extends React.Component {
  constructor(props) {
    super(props);
    const localStorageData = localStorage.get('user', {
      palette: '1',
      name: '',
      job: '',
      photo: woman,
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      url: '',
      loading: false,
    });
    this.state = localStorageData;
    this.handleInput = this.handleInput.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.isValidated = this.isValidated.bind(this);
    this.createCardFetch = this.createCardFetch.bind(this);
  }

  handleReset() {
    this.setState({
      palette: '1',
      name: '',
      job: '',
      photo: woman,
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      url: '',
      loading: false,
    });
  }

  handleInput(data) {
    this.setState({
      palette: data.name === 'palette' ? data.value : this.state.palette,
      name: data.name === 'name' ? data.value : this.state.name,
      job: data.name === 'job' ? data.value : this.state.job,
      email: data.name === 'email' ? data.value : this.state.email,
      phone: data.name === 'phone' ? data.value : this.state.phone,
      linkedin: data.name === 'linkedin' ? data.value : this.state.linkedin,
      github: data.name === 'github' ? data.value : this.state.github,
    });
    this.setState({ url: '' });
  }

  handleImage(img) {
    this.setState({
      photo: img,
    });
  }

  componentDidUpdate() {
    const { name, job, photo, email, github, linkedin, phone, palette } = this.state;
    localStorage.set('user', { name, job, photo, email, github, linkedin, phone, palette });
  }

  createCardFetch() {
    if (this.isValidated() === true) {
      this.setState({ loading: true });
      fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.name,
          job: this.state.job,
          photo: this.state.photo,
          phone: this.state.phone,
          email: this.state.email,
          linkedin: this.state.linkedin,
          github: this.state.github,
          palette: this.state.palette,
        }),
      })
        .then((response) => response.json())
        .then((data) => this.setState({ url: data.cardURL, loading: false }));
    }
  }

  isValidated() {
    const { name, job, photo, phone, email, linkedin, github } = this.state;
    const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    const phoneRegex = /[0-9]{3}[0-9]{2}[0-9]{2}[0-9]{2}/;

    if (name && job && photo && phoneRegex.test(phone) && emailRegex.test(email) && linkedin && github) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <section className='cards-page'>
        <Form handleInput={this.handleInput} handleImage={this.handleImage} palette={this.state.palette} formData={this.state} handleReset={this.handleReset} createCardFetch={this.createCardFetch} isValidated={this.isValidated()} isLoading={this.state.loading} />
        <Card palette={this.state.palette} name={this.state.name} job={this.state.job} photo={this.state.photo} email={this.state.email} phone={this.state.phone} linkedin={this.state.linkedin} github={this.state.github} handleReset={this.handleReset} />
      </section>
    );
  }
}

export default Main;
