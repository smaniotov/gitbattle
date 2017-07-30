import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
//import App from './Components/App';
import Main from './Components/Main';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NavBar />, document.getElementById('navbar'));
ReactDOM.render(<Main />, document.getElementById('main'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
registerServiceWorker();
