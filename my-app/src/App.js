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

import Adminpanel from './Admin/AdminPanel'
import LoginAdmin from './Components/LoginAdmin/login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      images: [],
      produc: [],
      admins: [],
      sub: [],
      colors: [],
      error: "",
      loggedIn: false

    }
  }







  getImageList = async () => {
    try {
      const response = await fetch("http://localhost:8080/Image");
      const result = await response.json();
      console.log(result);
      if (result.success) {
        this.setState({ images: result.result, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };

  createImage = async props => {
    try {
      if (!props || !(props.image && props.price && props.idproduct && props.des && props.title)) {
        throw new Error(
          `you need both image, price, idproduct, des & title   properties to create a Image list`
        );
      }
      const { image, price, idproduct, des, title } = props;
      const response = await fetch(
        `http://localhost:8080/Image/create?image=${image}&price=${price}&idproduct=${idproduct}&des=${des}&title=${title}`
      );
      const result = await response.json();
      if (result.success) {
        // we reproduce the user that was created in the database, locally
        const id = result.result;
        const imageY = { image, price, idproduct, des, title };
        const images = [...this.state.images, imageY];
        this.setState({ images, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err.message });
    }
  };


  deleteImage = async (props) => {
    try {
      const { id } = props;
      const response = await fetch(
        `http://localhost:8080/Image/delete?id=${id}`
      );
      const result = await response.json();
      if (result.success) {
        // remove the user from the current list of users
        const images = this.state.images.filter(
          imageY => imageY.id !== id
        );
        this.setState({ images, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };

  updateImage = async (props) => {
    try {
      if (!props && !props.image && !props.price && !props.idproduct && !props.des && !props.title && !props.id) {
        throw new Error(
          `you need to update one variable at least`
        );
      }
      const { image, price, idproduct, des, title, id } = props;

      const response = await fetch(`http://localhost:8080/Image/update?id=${id}&image=${image}&price=${price}&idproduct=${idproduct}&des=${des}&title=${title}`);
      const result = await response.json();
      if (result.success) {
        // we update the user, to reproduce the database changes:
        const images = this.state.images.map(imageY => {
          // if this is the contact we need to change, update it. This will apply to exactly
          // one contact
          if (imageY.id === id) {
            const new_image = {
              id: imageY.id,
              image: props.image || imageY.image,
              price: props.price || imageY.price,
              idproduct: props.idproduct || imageY.idproduct,
              des: props.des || imageY.des,
              title: props.title || imageY.title
            };
            return new_image;
          }
          // otherwise, don't change the contact at all
          else {
            return imageY;
          }
        });
        this.setState({ images, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };







  getProductList = async () => {
    try {
      const response = await fetch("http://localhost:8080/Product");
      const result = await response.json();
      console.log(result);
      if (result.success) {
        this.setState({ produc: result.result, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };

  createProduct = async props => {
    try {
      if (!props || !(props.typename)) {
        throw new Error(
          `you need typename properties to create a Product list`
        );
      }
      const { typename } = props;
      const response = await fetch(
        `http://localhost:8080/Product/create?typename=${typename}`
      );
      const result = await response.json();
      if (result.success) {
        // we reproduce the user that was created in the database, locally
        const id = result.result;
        const productY = { typename };
        const produc = [...this.state.produc, productY];
        this.setState({ produc, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err.message });
    }
  };


  deleteProduct = async (props) => {
    try {
      const { id } = props;
      const response = await fetch(
        `http://localhost:8080/Product/delete?id=${id}`
      );
      const result = await response.json();
      if (result.success) {
        // remove the user from the current list of users
        const produc = this.state.produc.filter(
          productY => productY.id !== id
        );
        this.setState({ produc, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };

  updateProduct = async (props) => {
    try {
      if (!props && !props.typename) {
        throw new Error(
          `you need to update typename`
        );
      }
      const { id, typename } = props;

      const response = await fetch(`http://localhost:8080/Product/update?typename=${typename}&id=${id}`);
      const result = await response.json();
      if (result.success) {
        // we update the user, to reproduce the database changes:
        const produc = this.state.produc.map(productY => {
          // if this is the contact we need to change, update it. This will apply to exactly
          // one contact
          if (productY.id === id) {
            const new_product = {
              id: productY.id,
              typename: props.typename || productY.typename,

            };
            return new_product;
          }
          // otherwise, don't change the contact at all
          else {
            return productY;
          }
        });
        this.setState({ produc, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };
  /* getProductList = async () => {
    try {
      const response = await fetch("http://localhost:8080/Product");
      const result = await response.json();
      console.log(result);
      if (result.success) {
        this.setState({ produc: result.result, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  }; */

  createProduct = async props => {
    try {
      if (!props || !(props.typename)) {
        throw new Error(
          `you need typename properties to create a Product list`
        );
      }
      const { typename } = props;
      const response = await fetch(
        `http://localhost:8080/Product/create?typename=${typename}`
      );
      const result = await response.json();
      if (result.success) {
        // we reproduce the user that was created in the database, locally
        const id = result.result;
        const productY = { typename };
        const produc = [...this.state.produc, productY];
        this.setState({ produc, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err.message });
    }
  };


  deleteProduct = async (props) => {
    try {
      const { id } = props;
      const response = await fetch(
        `http://localhost:8080/Product/delete?id=${id}`
      );
      const result = await response.json();
      if (result.success) {
        // remove the user from the current list of users
        const produc = this.state.produc.filter(
          productY => productY.id !== id
        );
        this.setState({ produc, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };

  updateProduct = async (props) => {
    try {
      if (!props && !props.typename) {
        throw new Error(
          `you need to update typename`
        );
      }
      const { id, typename } = props;

      const response = await fetch(`http://localhost:8080/Product/update?typename=${typename}&id=${id}`);
      const result = await response.json();
      if (result.success) {
        // we update the user, to reproduce the database changes:
        const produc = this.state.produc.map(productY => {
          // if this is the contact we need to change, update it. This will apply to exactly
          // one contact
          if (productY.id === id) {
            const new_product = {
              id: productY.id,
              typename: props.typename || productY.typename,

            };
            return new_product;
          }
          // otherwise, don't change the contact at all
          else {
            return productY;
          }
        });
        this.setState({ produc, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };





  getAdminList = async () => {
    try {
      const response = await fetch("http://localhost:8080/Admin");
      const result = await response.json();
      console.log(result);
      if (result.success) {
        this.setState({ admins: result.result, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };

  createAdmin = async props => {
    try {
      if (!props || !props.username || !props.password) {
        throw new Error(
          `you need username and password properties to create Admin list`
        );
      }
      const { username, password } = props;
      const response = await fetch(
        `http://localhost:8080/Admin/create?username=${username}&password=${password}`
      );
      const result = await response.json();
      if (result.success) {
        // we reproduce the user that was created in the database, locally
        const id = result.result;
        const adminY = { username, password };
        const admins = [...this.state.admins, adminY];
        this.setState({ admins, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err.message });
    }
  };


  deleteAdmin = async (props) => {
    try {
      const { id } = props;
      const response = await fetch(
        `http://localhost:8080/Admin/delete?id=${id}`
      );
      const result = await response.json();
      if (result.success) {
        // remove the user from the current list of users
        const admins = this.state.admins.filter(
          adminY => adminY.id !== id
        );
        this.setState({ admins, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };

  updateAdmin = async (props) => {
    try {
      if (!props && !props.id && !props.username && !props.password) {
        throw new Error(
          `you need to update username and password`
        );
      }
      const { id, username, password } = props;

      const response = await fetch(`http://localhost:8080/Admin/update?username=${username}&password=${password}&id=${id}`);
      const result = await response.json();
      if (result.success) {
        // we update the user, to reproduce the database changes:
        const admins = this.state.admins.map(adminY => {
          // if this is the contact we need to change, update it. This will apply to exactly
          // one contact
          if (adminY.id === id) {
            const new_admin = {
              id: adminY.id,
              username: props.username || adminY.username,
              password: props.password || adminY.password,
            };
            return new_admin;
          }
          // otherwise, don't change the contact at all
          else {
            return adminY;
          }
        });
        this.setState({ admins, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };





  getColorList = async () => {
    try {
      const response = await fetch("http://localhost:8080/Color");
      const result = await response.json();
      console.log(result);
      if (result.success) {
        this.setState({ colors: result.result, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };

  updateColor = async (props) => {
    try {
      if (!props && !props.color && !props.type) {
        throw new Error(
          `you need to update the color`
        );
      }
      const { type, color } = props;

      const response = await fetch(`http://localhost:8080/Color/update?type=${type}&color=${color}`);
      const result = await response.json();
      if (result.success) {
        // we update the user, to reproduce the database changes:
        const colors = this.state.colors.map(adminY => {
          // if this is the contact we need to change, update it. This will apply to exactly
          // one contact
          if (adminY.type === type) {
            const new_admin = {
              type: adminY.type,
              color: props.color || adminY.color,
            };
            return new_admin;
          }
          // otherwise, don't change the contact at all
          else {
            return adminY;
          }
        });
        this.setState({ colors, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };









  getSubscribeList = async () => {
    try {
      const response = await fetch("http://localhost:8080/Subscribe");
      const result = await response.json();
      console.log(result);
      if (result.success) {
        this.setState({ sub: result.result, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };


  deleteSubscribe = async (props) => {
    try {
      const { id } = props;
      const response = await fetch(
        `http://localhost:8080/Subscribe/delete?id=${id}`
      );
      const result = await response.json();
      if (result.success) {
        // remove the user from the current list of users
        const sub = this.state.sub.filter(
          adminY => adminY.id !== id
        );
        this.setState({ sub, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };








  async componentDidMount() {

    const response = await fetch("http://localhost:8080/Product");
    const data = await response.json();
    this.setState({ products: data.result });


    this.getImageList();
    this.getColorList();
    this.getProductList();
    this.getSubscribeList();
    this.getAdminList();
  }

  render() {
    return (

      <>
        <BrowserRouter>
          <Switch>
            <Route path="/admin">
              {
               <LoginAdmin />
              }
            </Route>
            <Route path="/">
              <div className="container-fluid">



                <Route path='/'>

                  <Navbar products={this.state.products}></Navbar>

                  <div>
                    <Switch>
                      <Route path="/" component={AppHome} exact />
                      <Route path="/Models:id" component={AppModals} />

                      {/*  <Route path="/Models/:id" exact render={(props) => {
            return <AppModals {...props} products={this.state.products} />
          }} /> */}

                      {/* <Route path="/Models2" component={AppModals2}/>
            <Route path="/Models3" component={AppModals3}/>
            <Route path="/Models4" component={AppModals4}/> */}
                      <Route path="/Contact" component={AppContact} />

                    </Switch>
                  </div>

                  <Subscribe></Subscribe>

                  <Footer></Footer>

                </Route>




              </div>
            </Route>
          </Switch>
        </BrowserRouter>


      </>

    );
  }
}

export default App;