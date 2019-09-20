import React, { Component } from "react";
import "./style.css";
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
                                    <h1 className="display-4" id = "titleTextStyling">LogIn</h1>
                                        <form className = "mx-auto">
                                            <div className="form-group">
                                                <input type="username" className="form-control" id="exampleInputuserName" aria-describedby="usernameHelp" placeholder="Enter username" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" id="InputPassword" placeholder=" Enter Password" />
                                            </div>
                                            <div className="form-group">
                                                <button type="button" className="btn btn-outline-primary" id="button1" >Duck Duck Go</button>
                                            </div>
                                            <div className="form-group">
                                                <button type="button" className="btn btn-outline-primary" id="button2" >Quake?</button>
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
