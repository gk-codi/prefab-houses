import React from "react";
import './info.css';
import axios from 'axios';


  


class ContactInfo extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }




  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    
     this.setState({name:'' , email: '', message: ''})
  }
  
render(){

  return (
    <div className="container">
    <div className="row jumbotron text-center" style={{marginTop: '20px', paddingBottom:"120px"}}>            
                  <div className="container-fluid bg-grey">
                  
                    <div className="row">
                      <div className="col-sm-5">
                        <h3>Company Details</h3> <br/>
                        <address>
                          <strong>Address</strong><br/>
                          Gemmayze, Beirut<br/>
                          Sehit El Nour, Tripoli<br/>
                        </address>
                        <address>
                          <strong>Phone</strong><br/>
                          <abbr title="Phone">P:</abbr> (+961) 456-7890
                        </address>
                        <address>
                          <strong>Available</strong><br/>
                          from 8:00am till 5pm<br/>
                        </address>
                        <address>
                          <strong>Email</strong><br/>
                          <a href="mailto:#">omar@codi.tech</a>
                        </address>
                        
                      </div>
                      <div className="col-md-7">
                        <h3 className="text-center">Contact us</h3>
                        <p>Contact us and we'll get back to you within 24 hours.</p>
                        <br/>
                        <form  id="contact-form" 
                      onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div className="row">
                          <div className="col-sm-6 form-group"  style={{textAlign: 'left'}}>
                            <label for="fname">Your Name: <label style={{color: 'red'}}> *</label></label> <br/>
                            <input className="form-control" id="name" name="name" placeholder="Name" type="text" required value={this.state.name}  onChange={this.onNameChange.bind(this)}/>
                          </div>
                          <div className="col-sm-6 form-group" style={{textAlign: 'left'}}>
                            <label for="fname">Your Email <label style={{color: 'red'}}> *</label></label> <br/>
                            <input className="form-control" id="email" name="email" placeholder="Email" type="email" required value={this.state.email}  onChange={this.onEmailChange.bind(this)}/>
                          </div>
                        </div>
                        <div style={{textAlign: 'left'}}>
                        <label for="fname">Your Message: <label style={{color: 'red'}}> *</label></label> <br/>
                        <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5" value={this.state.message}  onChange={this.onMessageChange.bind(this)}></textarea><br/>
                        </div>
                        <div className="row">
                          <div className="col-sm-12 form-group">
                           <input type="submit" value="Submit" />
                          </div>
                        </div>
                      </form>
                      </div>
                      
                    </div>
                  </div> 
            </div>
        </div>
  );


  

}
  


onNameChange(event) {
	this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	this.setState({message: event.target.value})
  }

  

}



export default ContactInfo;