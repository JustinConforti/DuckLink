import React, { Component } from "react";
import "./style.css";
import API from "../utils/ExampleUtil"


class Register extends Component {
	state = {
			email: "",
			username: "",
			password: ""
	};


// componentDidMount() {
	
// }



handleChange = event => {
	const { name, value } = event.target;
	this.setState({
		[name]: value
	});
};

onClickSaveUser = (email, username, password) => {
	API.registerUser({
		email,
		username,
		password,
	})
		.then(res => {
		alert("Registration Completed!")
		console.log(res)
	})
};


render() {
	return (
<div class = "wrapper container">
	<div class="tab-content card" id="nav-tabContent">
					
		<div class = "card-body">

				<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

						<div class = "row">
								<h1 class = "mx-auto">Register</h1>
						</div>
				

				<div class = "row">

						<form class = "mx-auto">
								
								<div class="form-group">
										<input type="email" 
										name="email" 
										className="form-control" 
										id="exampleInputEmail1" 
										aria-describedby="emailHelp" 
										placeholder="Enter email"
										onChange={this.handleChange}
										value={this.state.email}
										/>
								</div>

								<div class="form-group">
										<input type="username"
										name="username" 
										className="form-control" 
										id="exampleInputUsername1" 
										aria-describedby="emailHelp" 
										placeholder="Enter username"
										onChange={this.handleChange}
										value={this.state.username} />
								</div>

								<div class="form-group">
										<input type="password"
										name="password" 
										className="form-control" 
										id="exampleInputPassword1" 
										placeholder="Password"
										onChange={this.handleChange}
										value={this.state.password} />
								</div>

{/* 
								 <div class="form-group">
										<input type="password"
										name="password" 
										className="form-control" 
										id="exampleInputPassword2" 
										placeholder="Reconfirm Password"
										onChange={this.handleChange} />
								</div> 
								*/}

								<div class="form-group">
										<button
										type="button" 
										className="btn btn-outline-primary"
										onClick={() => this.onClickSaveUser(this.state.email, this.state.username, this.state.password)}
										>Go
										</button>
								</div>

						</form>

				</div>

			</div>
		</div>
	</div>
	
	</div>


	)}
}


	export default Register;