import React from 'react';
import '../stylesheets/Form.scss';

const Form = () => (
<form action="" method="POST" class="articles-container">
  <div class="principal-column">
    <partial src="_forms-design.html"></partial>
    <partial src="_forms-fill.html"></partial>
    <partial src="_forms-share.html"></partial>
  </div>
</form>
);

export default Form;
