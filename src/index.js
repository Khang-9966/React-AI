import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ElevationScroll from './headerbar';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
  <ElevationScroll/>
  <div><App/>,</div>
  </React.StrictMode>,
  document.getElementById('root'),
  
);

serviceWorker.unregister();
