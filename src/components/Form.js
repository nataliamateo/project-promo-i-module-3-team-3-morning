import React from 'react';
import '../stylesheets/Form.scss';
import Design from './Design';
import Fill from './Fill';

const Form = () => (
  <form action="" method="POST" class="articles-container">
    <div class="principal-column">
      <Design />
      <Fill/>
      <partial src="_forms-share.html"></partial>
    </div>
  </form>
);

export default Form;
