import React, { Component } from "react";
import "./style.css";
import API from "../utils/API"
import Nav from "../components/Nav";
import Swal from "sweetalert2";
import  { Redirect } from 'react-router-dom'

import { Link } from "react-router-dom";

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

  onClickLogout = () => {
    API.logoutUser({})
    .then (res=> {
      alert("You have been logged out!")
      console.log(res)
    })
   };

  onClickLogin = (username, password) => {
    console.log("request is going")
    API.loginUser({
      username,
      password
    })
      .then(res => {
        console.log("response is back")
        Swal.fire(
          '',
          '',
          'success'
        )
        console.log(res.data.s)
        this.props.history.push('/home')
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
                            <div className="card-body card-body-window" style={{borderColor: " #ff899f"}}>

                                    <img id = "logoImg" src="assets/images/duck.png" alt="..." height= "400 px" width= "400 px"></img>
                                    <h1 className="display-4 mx-auto" id = "titleTextStyling">LOG IN</h1>
                                        <form className = "mx-auto fontPusher">

                                            <div className="form-group">
                                              <input type="username"
                                                  name="username" 
                                                  className="form-control" 
                                                  aria-describedby="usernameInput" 
                                                  placeholder="Enter username"
                                                  onChange={this.handleChange}
                                                  value={this.state.username} />
                                            </div>

                                            <div className="form-group">
                                              <input type="password"
                                                  name="password" 
                                                  className="form-control" 
                                                  id="exampleInputPassword1" 
                                                  aria-describedby="passwordHelp" 
                                                  placeholder="Enter password"
                                                  onChange={this.handleChange}
                                                  value={this.state.password} />
                                            </div>

                                            <div className="form-group">
                                                <button type="button" 
                                                  className="btn btn-primary" 
                                                  id="buttonStyle" 
                                                  onClick={() => this.onClickLogin(this.state.username, this.state.password)}>DUCK DUCK GO!!!</button>
                                            </div>

                                            <Link to={"/registration"}>
                                              <div className="form-group">
                                                <button type="button" 
                                                  className="btn btn-primary" 
                                                  id="buttonStyle" 
                                                  >REGISTER
                                                </button>
                                              </div>
                                            </Link>

                                          </form>

                                    </div>
                                </div>                               
                            </div>

                        <div className="col">
                    </div>
                </div>
            <Nav />
        </div>
    );
  }
}

export default Login;
