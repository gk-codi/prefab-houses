import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './Components/Common/Footer/footer'
import * as serviceWorker from './serviceWorker';
import Subscribe from './Components/Common/subscribe/subscribe'
import Navbar from './Components/Common/Nav/nav';
import Home1 from './Components/Home/firstPart/Home1';
import Price from './Components/Modals/price slider/price';
import Picture from './Components/Modals/picture slider/picture';
import Sponsers from './Components/Home/secondpart/sponsers';
import AppHome from './Pages/Home/home';
import ContactInfo from './Components/Contact us/Info/info';
import AppContact from './Pages/Contact us/contact';
import SimpleMap from './Components/Contact us/map/map';




ReactDOM.render(<Picture/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
