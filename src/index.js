import React from 'react';
import ReactDOM from 'react-dom';
import classes from './index.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
  
const app = <div className ={classes.Index}><App /></div>

ReactDOM.render( app, document.getElementById('root'));


serviceWorker.unregister();
