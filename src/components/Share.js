import React from 'react';
import '../stylesheets/Share.scss';
import TwitterButton from './TwitterButton';

const Share = () => (
  <fieldset class="collapsible twitter collapsable--open">
    <div class="js-collapsible--trigger collapsible__header--share">
      <i class="collapsible__header--icon fas fa-share-alt"></i>
      <h2 class="collapsible__header__title">comparte</h2>
      <i class="collapsible__header--arrow-icon--share fas fa-chevron-up"></i>
    </div>
    <div>
      <TwitterButton />
    </div>
  </fieldset>
);

export default Share;
