import React from 'react';
import woman from '../images/woman.png';
const fr = new FileReader();

class InputFile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickFake = this.handleClickFake.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.writeImage = this.writeImage.bind(this);
    this.inputFile = React.createRef();
    this.state = {
      photo: woman,
    };
  }
  handleClickFake(ev) {
    this.inputFile.current.click();
  }
  handleFile(ev) {
    ev.preventDefault();
    const myFile = this.inputFile.current.files[0];
    fr.addEventListener('load', this.writeImage);
    fr.readAsDataURL(myFile);
  }
  writeImage() {
    this.setState({
      photo: fr.result,
    });
    this.props.handleImage(fr.result);
  }

  render() {
    return (
      <>
        <label className='collapsible__content--style-text' htmlFor='image'>
          Imagen de perfil
        </label>
        <div className=' action collapsible__content--container-button'>
          <button className='action__upload-btn js__profile-trigger collapsible__content--style-text--button' type='button' onClick={this.handleClickFake}>
            Añadir imagen
          </button>
          <input type='file' name='' id='img-selector' className='action__hiddenField js__profile-upload-btn' ref={this.inputFile} onChange={this.handleFile} />
        </div>
        <div className='profile'>
          <div className='js__profile-preview collapsible__content--container-button--image-box'>
            <img src={this.props.photo} alt='Imagen' className='profile__preview' />
          </div>
        </div>
      </>
    );
  }
}

export default InputFile;
