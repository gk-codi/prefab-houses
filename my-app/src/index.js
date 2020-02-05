import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './Components/Common/Footer/footer'
import * as serviceWorker from './serviceWorker';
import Subscribe from './Components/Common/subscribe/subscribe'
import Navbar from './Components/Common/Nav/nav';

ReactDOM.render(<Subscribe />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
