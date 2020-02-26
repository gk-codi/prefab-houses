import React from 'react'
import './AdminPanel.css'

class Adminpanel extends React.Component {

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
      editMode: false,
      userEdit: {
        ID: '',
        UserName: '',
        UserPassword: ''
      }, 
      userAdd: {
        UserName: '',
        UserPassword: ''
      }
    }
  }

handleAddChange = (event) => {
  this.setState({
    userAdd: {
      ...this.state.userAdd,
      [event.target.name]: event.target.value
    }
  })
}


handleEditChange = (event) => {
  this.setState({
    userEdit: {
      ...this.state.userEdit,
      [event.target.name]: event.target.value
    }
  })
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
      const { price, idproduct, des, title, file } = props;
      const body = new FormData();
      body.append('image', file)
      const response = await fetch(
        `http://localhost:8080/Image/create?price=${price}&idproduct=${idproduct}&des=${des}&title=${title}`
        ,
        {
          method: "POST",
          body
        }
      );
      const result = await response.json();
      if (result.success) {
        // we reproduce the user that was created in the database, locally
        const id = result.result;
        const imageY = { Image: file.name, Price: price, IDproduct: idproduct, Description: des, Title: title };
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
      /* debugger; */
      if (result.success) {
        // remove the user from the current list of users
        const images = this.state.images.filter(
          imageY => imageY.ID !== id
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
          if (imageY.ID === id) {
            const new_image = {
              id: imageY.ID,
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
      if (!props || !(props.TypeName)) {
        throw new Error(
          `you need TypeName properties to create a Product list`
        );
      }
      const { TypeName } = props;
      console.log(TypeName);
      const response = await fetch(
        `http://localhost:8080/Product/create?typename=${TypeName}`
      );
      const result = await response.json();
      /*    debugger; */
      if (result.success) {
        // we reproduce the user that was created in the database, locally
        const IDproduct = result.result;
        const productY = { TypeName, IDproduct };
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
      /*  debugger; */
      if (result.success) {
        // remove the user from the current list of users
        const produc = this.state.produc.filter(
          productY => productY.IDproduct !== id
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
          if (productY.IDproduct === id) {
            const new_product = {
              id: productY.IDproduct,
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
    /* debugger; */

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
        const ID = result.result;
        const adminY = { UserName: username, UserPassword: password, ID };

        const admins = [...this.state.admins, adminY];
        this.setState({ admins, error: "", userAdd: {
          UserName: '',
          UserPassword: ''
        } });
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
          adminY => adminY.ID !== id
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
        debugger;

        // we update the user, to reproduce the database changes:
        const admins = this.state.admins.map(adminY => {
          // if this is the contact we need to change, update it. This will apply to exactly
          // one contact
          if (adminY.ID === parseInt(id)) {
            const new_admin = {
              ID: adminY.ID,
              UserName: props.username || adminY.UserName,
              UserPassword: props.password || adminY.UserPassword,
            };
            return new_admin;
          }
          // otherwise, don't change the contact at all
          else {
            return adminY;
          }
        });
        this.setState({
          admins,
          error: "",
          editMode: false,
          userEdit: {
            ID: '',
            UserName: '',
            UserPassword: ''
          }
        });
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
          adminY => adminY.ID !== id
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
    this.getSubscribeList();
    this.getAdminList();
    this.getImageList();
    this.getProductList();
    this.getColorList();
  }

  onSubmit = (event) => {
    /* debugger; */
    event.preventDefault();
    const form = event.target;
    const username = this.state.userAdd.UserName;
    const password = this.state.userAdd.UserPassword;
    this.createAdmin({ username, password });
  }

  onEditSubmit = (event) => {
    /* debugger; */
    event.preventDefault();
    const form = event.target;
    const id = form.admin_id.value;
    const username = this.state.userEdit.UserName;
    const password = this.state.userEdit.UserPassword;
    this.updateAdmin({ id, username, password });
  }
  onSubmit1 = (event) => {
    /* debugger; */
    event.preventDefault();
    console.log(event.target.name_model.value)
    const form = event.target;
    /* const IDproduct=form.id_model.value; */
    const TypeName = form.name_model.value;
    this.createProduct({ TypeName });
  }
  onSubmit2 = async (event) => {
    /* debugger; */
    event.preventDefault();
    const form = event.target;

    const idproduct = form.id_model.value;
    const image = form.image_model.value;
    const price = form.price_model.value;
    const des = form.des_model.value;
    const title = form.title_model.value;
    const file = event.target.image_model.files[0];
    this.createImage({ idproduct, image, price, des, title, file });

    /*  
     console.log(file);
     const body = new FormData();
     body.append('image', file);
     const response = await fetch("http://localhost:8080/image_model", {
      method:'POST', 
      body:body
    });
    const result = await response.json(); */
  }


  toggleEditMode(admin) {
    this.setState({ editMode: true, userEdit: admin })
  }


  renderView() {
    return (
      <div className="adminbody">

        <div id="adminheader">
          <h2>PREFAB HOUSES</h2>
          <div><img src="adminlogo.png" alt="adminlogo" id="adminlogo" /><br />This is Admin Panel, Please procced with caution!</div>
        </div>
        <div className="row">
          <div className="col-sm-5" style={{ margin: "20px" }}>
            <div>
              <h2 style={{ textAlign: "center" }}>Admin list</h2>
              <br />
              <table className="table table-hover table-bordered">
                <thead style={{ backgroundColor: "black", color: "white" }}>
                  <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Password</th>
                  </tr>
                </thead>
                {this.state.admins.map(admin => (
                  <tbody className=" table-active">
                    <tr >
                      <td>{admin.ID}</td>
                      <td>{admin.UserName}</td>
                      <td>{admin.UserPassword}</td>
                      <td>
                        <a onClick={event => {
                          event.preventDefault();
                          this.deleteAdmin({
                            id: admin.ID
                          })
                        }}>Delete</a>
                        <a onClick={event => {
                          event.preventDefault();
                          this.toggleEditMode(admin)
                        }
                        }>Edit</a>
                      </td>
                    </tr>
                  </tbody>
                ))}

              </table>
              {
                this.state.editMode ?
                  <form onSubmit={this.onEditSubmit}>
                    <input type="hidden" value={this.state.userEdit.ID} name="admin_id" />
                    <input type="text" placeholder="Admin username" name="UserName" 
                    onChange={this.handleEditChange}
                    value={this.state.userEdit.UserName} />
                    <input type="text" placeholder="Admin password" 
                      onChange={this.handleEditChange}
                      value={this.state.userEdit.UserPassword}
                    name="UserPassword" ></input>
                    <input type="submit" value="Update"></input>
                    <input type="button" value="Cancel" onClick={
                      event => {
                        this.setState({
                          editMode: false,
                          userEdit: {
                            ID: '',
                            UserName: '',
                            UserPassword: ''
                          }
                        })
                      }
                    }></input>
                  </form>
                  : <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Admin username" 
                      onChange={this.handleAddChange}
                      value={this.state.userAdd.UserName}
                    name="UserName" />
                    <input type="text" placeholder="Admin password" 
                     onChange={this.handleAddChange}
                     value={this.state.userAdd.UserPassword}
                    name="UserPassword" />
                    <input type="submit" value="Add" />


                  </form>
              }

            </div>
            <br /><br />
            <div>
              <h2 style={{ textAlign: "center" }}>Models list</h2>
              <br />
              <table className="table table-hover table-bordered">
                <thead style={{ backgroundColor: "black", color: "white" }}>
                  <tr>
                    <th>ID Model</th>
                    <th>Model Name</th>
                  </tr>
                </thead>
                {this.state.produc.map(subs => (
                  <tbody className=" table-active">
                    <tr>
                      <td>{subs.IDproduct}</td>
                      <td>{subs.TypeName}</td>
                      <td>
                        <a onClick={event => {
                          event.preventDefault();
                          this.deleteProduct({
                            id: subs.IDproduct
                          })
                        }}>Delete</a>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
              <form onSubmit={this.onSubmit1}>
                {/* <input type="text" placeholder="ID Model" name="id_model"></input> */}
                <input type="text" placeholder="Model Name" name="name_model"></input>
                <input type="submit" value="Add"></input>
              </form>
            </div>
          </div>
          <div className="col-sm-5" style={{ margin: "20px" }}>
            <h2 style={{ textAlign: "center" }}>Subscribers list</h2>
            <br />
            <table className="table table-hover table-bordered">
              <thead style={{ backgroundColor: "black", color: "white" }}>
                <tr>
                  <th>Location</th>
                  <th>Email</th>
                </tr>
              </thead>
              {this.state.sub.map(subs => (
                <tbody className=" table-active">
                  <tr>
                    <td>{subs.Location}</td>
                    <td>{subs.Email}</td>
                    <td>
                      <a onClick={event => {
                        event.preventDefault();
                        this.deleteSubscribe({
                          id: subs.ID
                        })
                      }}>Delete</a>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
        <div style={{ margin: "20px" }}>
          <h2 style={{ textAlign: "center" }}>Images list</h2>
          <br />
          <table className="table table-hover table-bordered">
            <thead style={{ backgroundColor: "black", color: "white" }}>
              <tr>
                <th>ID Model</th>
                <th>Image</th>
                <th>Price</th>
                <th>Title</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody className=" table-active">

              {this.state.images.map(subs => (
                <tr key={subs.ID}>
                  <td>{subs.IDproduct}</td>
                  <td>{subs.Image}</td>
                  <td>{subs.Price}</td>
                  <td>{subs.Title}</td>
                  <td>{subs.Description}</td>
                  <td>
                    <a onClick={event => {
                      event.preventDefault();
                      this.deleteImage({
                        id: subs.ID
                      })
                    }}>Delete</a>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

          <form onSubmit={this.onSubmit2}>
            <input type="text" placeholder="ID Model" name="id_model"></input>
            <input type="file" name="image_model"></input>
            <input type="text" placeholder="Model Price" name="price_model"></input>
            <input type="text" placeholder="Model Name" name="title_model"></input>
            <input type="text" placeholder="Model Description" name="des_model"></input>
            <input type="submit" value="Add"></input>
          </form>
        </div>
        <br /><br /><br /><br />

        <div style={{ margin: "20px", width: "60%" }}>
          <h2 style={{ textAlign: "center" }}>Editing Color</h2>
          <br />
          <table className="table table-hover table-bordered">
            <thead style={{ backgroundColor: "black", color: "white" }}>
              <tr>
                <th>Section</th>
                <th>Color</th>
              </tr>
            </thead>
            {this.state.colors.map(subs => (
              <tbody className=" table-active">
                <tr>
                  <td style={{ backgroundColor: "lightgrey", width: "200px" }}>{subs.type}</td>
                  <td>{subs.color}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    )
  }

  render() {
    return this.renderView();
  }

}

export default Adminpanel;