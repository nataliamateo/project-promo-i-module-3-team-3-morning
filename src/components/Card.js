import React from 'react';
import Icons from './Icons';
import '../stylesheets/Card.scss';
import woman from '../images/woman.png';

console.log();

class Card extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <section className='js-card img-creation'>
        <div className='js-card-palette1 js-background img-creation__container'>
          <div className='img-creation__container--card'>
            <button className='js-reset img-creation__button'>
              <i className='far fa-trash-alt'></i>Reset
            </button>
            <article className=' img-creation__card'>
              <div className='js-border img-creation__card--container'>
                <h2 className='js-cardname js-pastename img-creation__card--name' value=''>
                  {this.props.name || 'Nombre Apellidos'}
                </h2>
                <h3 className='js-cardjob img-creation__card--profession' value=''>
                  {this.props.job || 'FrontEnd Developer'}
                </h3>
              </div>
              <div className='profile__image js__profile-image'>
                <img src={this.props.img || woman} alt='' className='profile__image' />
              </div>
              <Icons phone={this.props.phone} email={this.props.email} linkedin={this.props.linkedin} github={this.props.github} />
            </article>
          </div>
        </div>
      </section>
    );
  }
}

export default Card;
