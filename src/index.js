import React from 'react';
import ReactDOM from 'react-dom';
import Stream from './components/Stream';

import registerServiceWorker from './registerServiceWorker';

const tracks = [
  {
    title: 'Some track'
  },
  {
    title: 'Some other track'
  }
];

ReactDOM.render(
  <Stream tracks={tracks} />, 
  document.getElementById('root')
);
registerServiceWorker();
