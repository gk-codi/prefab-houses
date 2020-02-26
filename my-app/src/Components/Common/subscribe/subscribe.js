import React from "react";
import "./subscribe.css";
import {Dropdown} from 'primereact/dropdown';

const openForm = () => document.getElementById("myForm").style.display = "none";
const closeForm = () => document.getElementById("myForm").style.display = "block";
 
const citySelectItems = [
  {label: 'Beirut', value: 'Beirut'},
  {label: 'Jbeil', value: 'Jbeil'},
  {label: 'South', value: 'South'},
  {label: 'North', value: 'North'},
  {label: 'Tripoli', value: 'Tripoli'}
];


class Subscribe extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      city: '',
      sub: [],
      error: "" 
    }
  }
  

createSubscribe = async props => {
  try {
    if (!props || !props.location || !props.email) {
      throw new Error(
        `you need location and email properties to create Subscribe list`
      );
    }
    const { location, email} = props;
    const response = await fetch(
      `http://localhost:8080/Subscribe/create?location=${location}&email=${email}`
    );
    const result = await response.json();
    if (result.success) {
      // we reproduce the user that was created in the database, locally
      const ID = result.result;
      const adminY = { location, email, ID};
      const subs = [...this.state.sub, adminY];
      this.setState({ subs, error: "" });
    } else {
      this.setState({ error: result.message });
    }
  } catch (err) {
    this.setState({ error: err.message });
  }
};
onSubmit =(event) => {
  event.preventDefault();
  const form=event.target;
  let email=form.mail.value;
  let location=form.txt.value;
  this.createSubscribe({location,email});
  form.mail.value="";
  form.txt.value="";
} 
render(){
  return (
   
<body>

<button className="open-button" onClick={closeForm}>Subscribe Now</button>
<div className="form-popup" id="myForm">
  <form  className="form-container" onSubmit={this.onSubmit}>
    <h1>Subsucribe</h1>

    <label for="mail"><b>Email</b><br/></label>
    <input type="email" placeholder="Enter Your Email" name="mail" required/>

    <label for="txt"><b>Location</b><br/></label>
    <br/>
      <Dropdown type="text" className="dropdownlistt "  name="txt" value={this.state.city} options={citySelectItems} onChange={(e) => {this.setState({city: e.value})}} placeholder="Select a City"/>
      
    {/* <input type="text" placeholder="Enter Your City" name="txt" required/> */}

    <button type="submit" className="btn"  onClick={openForm}>Submit</button>
    <button type="button" className="btn cancel" onClick={openForm}>Close</button>
  </form>
</div>



</body>
  );
};
}


export default Subscribe;