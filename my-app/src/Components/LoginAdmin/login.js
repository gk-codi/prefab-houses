import React from "react";
import "./login.css";
import Adminpanel from '../../Admin/AdminPanel'

class LoginAdmin extends React.Component {
constructor(props){
	super(props)
	this.state = {
		loggedIn : false,
		username: '',
		password: ''
	}
}
handleLogin = async (event) => {
	event.preventDefault();
	const body={username:this.state.username, password:this.state.password}
    const response = await fetch(`http://localhost:8080/auth`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		  },
		body: JSON.stringify(body)
	  });
	const data = await response.json();
	console.log(data)
    this.setState({ loggedIn: data.result });
}
handleUserChange = (event) => this.setState({username: event.target.value})
handlePasswordChange = (event) => this.setState({password: event.target.value})

	render(){
		return (

			<body>
				{ this.state.loggedIn 
                ?   <Adminpanel /> 
				:	<div className="login-form">
					<h1>Login Form</h1>
					<form>
						<input type="text" name="username" value = {this.state.username} onChange = {this.handleUserChange} placeholder="Username" required />
						<input type="password" name="password" value = {this.state.password} onChange = {this.handlePasswordChange} placeholder="Password" required />
						<input type="submit" onClick={this.handleLogin}/>
						{/* <button onClick={()=> {
						  this.setState({loggedIn: true   })
						}}>Login</button> */}
					</form>
				</div>
	}
			</body>
		  )
		  }
	}
 

  export default LoginAdmin