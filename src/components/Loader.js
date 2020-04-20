import React from 'react';
import '../stylesheets/Loader.scss';

function Loader(props) {
  return props.isLoading ? (
    <div className='loadingio-spinner-bean-eater-l2wkkyc8cf'>
      <div className='ldio-1z9xhyvqffgi'>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  ) : null;
}

export default Loader;
