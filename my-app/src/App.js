import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import AppHome from './Pages/Home/home'
import AppContact from './Pages/Contact us/contact'
import AppModals from './Pages/Modals/Modals'
 
class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={AppHome} exact/>
             <Route path="/Models" component={AppModals}/>
             <Route path="/Contact" component={AppContact}/>

           </Switch>
        </div> 
      </BrowserRouter>
    );
    }
}
 
export default App;