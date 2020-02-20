import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import AppHome from './Pages/Home/home'
import AppContact from './Pages/Contact us/contact'
import AppModals from './Pages/Modals/Modals'
import AppModals2 from './Pages/Modals/Modals2'
import AppModals3 from './Pages/Modals/Modals3';
import AppModals4 from './Pages/Modals/Modals4';
import Navbar from './Components/Common/Nav/nav';
import Subscribe from './Components/Common/subscribe/subscribe';
import Footer from './Components/Common/Footer/footer';
 
class App extends Component {

  constructor(props){
    super(props);

    this.state = {

      products: [],
      
    }
  }



  async componentDidMount(){

    const response = await fetch("http://localhost:8080/Product");
    const data = await response.json();
    this.setState({ products : data})

  }

  render() {
    return (
    <div className="container-fluid">
    
       <BrowserRouter>

       <Navbar products={this.state.products}></Navbar>

        <div>
            <Switch>
             <Route path="/" component={AppHome} exact/>
             <Route path="/Models:id" component={AppModals}  />
             {/* <Route path="/Models2" component={AppModals2}/>
             <Route path="/Models3" component={AppModals3}/>
             <Route path="/Models4" component={AppModals4}/> */}
             <Route path="/Contact" component={AppContact}/>

           </Switch>
        </div> 
      </BrowserRouter>

      <Subscribe></Subscribe>

      <Footer></Footer>

      </div>
    );
    }
}
 
export default App;