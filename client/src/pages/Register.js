import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";
import Swal from "sweetalert2";

class Register extends Component {

	state = {
			email: "",
			username: "",
			password: "",
      		password2: ""
	};


handleChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
};

onClickSaveUser = (username, email, password, password2) => {
    if(this.state.password!==this.state.password2) {
		Swal.fire({
			type: 'error',
			title: 'Error',
			text: 'Passwords do not match.'
		  })
    } else {
        API.registerUser({
            username,
            email,
            password,
            password2
        })
            .then(res => {
			Swal.fire(
					'Registration Complete!',
					'You have been redirected to Login',
					'success'
			)
            console.log(res)
            this.props.history.push('/login')
        });
    }
};
render() {
    return (
        <div className = "container">
            <div className = "row">
                <div className="col">
                </div>
                    <div classNames="col-10">
                        <div className="card">
                            <div className="card-body card-body-window">
                                    <img id = "logoImg" src="assets/images/duck.png" alt="..." height= "375 px" width= "375 px"></img>
                                    <h1 className="display-4 mx-auto" id = "titleTextStyling">REGISTER</h1>
                                        <form className = "mx-auto fontPusher">

                                            <div className = "form-group">
                                            <input type="username"
                                                name="username" 
                                                className="form-control" 
                                                aria-describedby="enter Username" 
                                                placeholder="Enter username"
                                                onChange={this.handleChange}
                                                value={this.state.username} />
                                            </div>
									
                                            <div className="form-group">
												<input type="email" 
												  name="email"
                                                  className="form-control" 
                                                  aria-describedby="enter password" 
                                                  placeholder="Enter email" 
                                                  onChange={this.handleChange} 
                                                  value={this.state.email} />
                                            </div>
      
                                            <div className="form-group">
                                                <input type="password" 
                                                  className="form-control" 
												  name="password"
                                                  placeholder="Password" 
                                                  onChange={this.handleChange} 
                                                  value={this.state.password} />
                                            </div>
      
                                            <div className="form-group">
                                                <input type="password" 
                                                  className="form-control" 
												  name="password2"
                                                  placeholder="Password" 
												  onChange={this.handleChange} 
												  value={this.state.password2}
												  />
                                            </div>

                                                <div className="form-group">
                                                <button type="button" 
                                                  className="btn btn-primary" 
                                                  id="buttonStyle" 
                                                  onClick={() => this.onClickSaveUser(this.state.username, this.state.email, this.state.password, this.state.password2)}>QUACK!!!</button>
                                            </div>

                                        </form>
                                  
                            </div>
                        </div>                               
                    </div>
                    <div className="col">
                </div>                               
				</div>
		</div>                               
    )}
	}



	export default Register
