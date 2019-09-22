import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import API from "../utils/API"

//import { Container, Col, Card, CardBody, Row } from "react-bootstrap/";
//import FormGroup from "react-bootstrap/FormGroup";
//import FormLabel from "react-bootstrap/FormLabel";
//import FormControl from "react-bootstrap/FormControl";
//import Button from "react-bootstrap/Button";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  componentDidMount() {
    console.log(this.state.username)
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
                                                  aria-describedby="usernameInput" 
                                                  placeholder="Password"
                                                  onChange={this.handleChange}
                                                  value={this.state.password} />
                                            </div>

                                            <div className="form-group">
                                                <button type="button" 
                                                  className="btn btn-primary" 
                                                  id="buttonStyle"
                                                  onClick={() => this.onClickLogin(this.state.username, this.state.password)} 
                                                  >DUCK DUCK GO!!!
                                                </button>
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
        </div>

       ///<div className ="screen">
      

     // </div>
    

    
    );
  }
}

export default Login;
