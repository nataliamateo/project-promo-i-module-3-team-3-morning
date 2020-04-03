import React from 'react';
import '../stylesheets/Form.scss';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

const Form = (props) => (
  <form action="" method="POST" class="articles-container">
    <div class="principal-column">
      <Collapsable>
        <Design />
      </Collapsable>
      <Collapsable>
        <Fill handleInput={props.handleInput} />
      </Collapsable>
      <Collapsable>
        <Share />
      </Collapsable>
    </div>
  </form>
);

export default Form;
