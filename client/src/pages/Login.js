import React, { Component } from "react";
import "./style.css";
import API from "../utils/API"


class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  componentDidMount() {

  }


  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  onClickLogin = (username, password) => {
    API.loginUser({
      username,
      password,
    })
      .then(res => {
      alert("Login Completed!")
      console.log(res)
    })
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
                                    <img id = "logoImg" src="assets/images/duck.png" alt="..." height= "400 px" width= "400 px"></img>
                                    <h1 className="display-4" id = "titleTextStyling">LogIn</h1>
                                        <form className = "mx-auto">
                    
                                            <div class="form-group">
													                    <input type="username" 
													                     name="username" 
													                     className="form-control" 
													                     id="exampleInputEmail1" 
													                     aria-describedby="usernameHelp" 
													                     placeholder="Enter username"
													                     onChange={this.handleChange}
													                     value={this.state.username}
													                       />
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
                                            <div class="form-group">
													                      <button
													                      type="button" 
													                      className="btn btn-outline-primary"
													                      onClick={() => this.onClickLogin()}
													                      >Login
													                      </button>
											                      </div>
                                            <div className="form-group">
                                                <button type="button" className="btn btn-outline-primary" id="button2" >Quake?</button>
                                            </div>
                                        </form>
                                  
                            </div>
                        </div>                               
                    </div>

             </div>
        </div>
    
    );
  }
}

export default Login;
