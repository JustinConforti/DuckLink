import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
//import { Container, Col, Card, CardBody, Row } from "react-bootstrap/";
//import FormGroup from "react-bootstrap/FormGroup";
//import FormLabel from "react-bootstrap/FormLabel";
//import FormControl from "react-bootstrap/FormControl";
//import Button from "react-bootstrap/Button";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  componentDidMount() {}
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
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
                                                  id="exampleInputUsername1" 
                                                  aria-describedby="emailHelp" 
                                                  placeholder="Enter username"
                                                  onChange={this.handleChange}
                                                  value={this.state.username} />
                                            </div>
                                            <div className="form-group">
                                              <input type="username"
                                                  name="username" 
                                                  className="form-control" 
                                                  id="exampleInputUsername1" 
                                                  aria-describedby="emailHelp" 
                                                  placeholder="Enter username"
                                                  onChange={this.handleChange}
                                                  value={this.state.username} />
                                            </div>

                                            <div className="form-group">
                                                <button type="button" 
                                                  className="btn btn-primary" 
                                                  id="buttonStyle" 
                                                  onClick={() => this.onClickSaveUser(this.state.email, this.state.username, this.state.password)}>DUCK DUCK GO!!!</button>
                                            </div>

                                            <div className="form-group">
                                                <button type="button" 
                                                  className="btn btn-primary" 
                                                  id="buttonStyle" 
                                                  onClick={() => this.onClickSaveUser(this.state.email, this.state.username, this.state.password)}>REGISTER</button>
                                            </div>
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
