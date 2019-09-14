import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <Card>
        <card.body>
          <row>
            <div className="Login">
              <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                  <FormLabel> Email </FormLabel>{" "}
                  <FormControl
                    autoFocus
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />{" "}
                </FormGroup>{" "}
                <FormGroup controlId="password" bsSize="large">
                  <FormLabel> Password </FormLabel>{" "}
                  <FormControl
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                  />
                </FormGroup>{" "}
                <Button
                  block
                  bsSize="large"
                  disabled={!this.validateForm()}
                  type="submit"
                >
                  Login{" "}
                </Button>{" "}
              </form>{" "}
            </div>{" "}
          </row>{" "}
        </card.body>{" "}
      </Card>
    );
  }
}

//register form
// <div className="Register">
//   <form onSubmit={this.handleSubmit}>
//   <FormGroup controlId="email" bsSize="large">
//   <FormLabel> Email </FormLabel>{" "}
// <FormControl
// autoFocus
//type="email"
//value={this.state.email}
//onChange={this.handleChange}
// />{" "}
// </FormGroup>{" "}
//<FormGroup controlId="password" bsSize="large">
// <FormLabel> Password </FormLabel>{" "}
// <FormControl
//  value={this.state.password}
//   onChange={this.handleChange}
//   type="password"
//  />
//  </FormGroup>{" "}
//  <Button
//   block
//   bsSize="large"
//   disabled={!this.validateForm()}
//   type="submit"
//  >
//   register{" "}
//  </Button>{" "}
//</form>{" "}
//  </div>
