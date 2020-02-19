import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import AppHome from './Pages/Home/home'
import AppContact from './Pages/Contact us/contact'
import AppModals from './Pages/Modals/Modals'
import AppModals2 from './Pages/Modals/Modals2'
import AppModals3 from './Pages/Modals/Modals3';
import AppModals4 from './Pages/Modals/Modals4';
 
class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={AppHome} exact/>
             <Route path="/Models" component={AppModals}/>
             <Route path="/Models2" component={AppModals2}/>
             <Route path="/Models3" component={AppModals3}/>
             <Route path="/Models4" component={AppModals4}/>
             <Route path="/Contact" component={AppContact}/>

           </Switch>
        </div> 
      </BrowserRouter>
    );
    }
}
 
export default App;