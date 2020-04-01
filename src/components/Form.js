import React from 'react';
import '../stylesheets/Form.scss';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

const Form = () => (
  <form action="" method="POST" class="articles-container">
    <div class="principal-column">
      <Design />
      <Fill />
      <Share />
    </div>
  </form>
);

export default Form;
