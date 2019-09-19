import React, { Component } from "react";
import "./style.css";
import { Container, Col, Card, CardBody, Row } from "react-bootstrap/";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

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
      <Container>
          <Card>
            <Card.Body>
              <div className="Login">
              <img id = "logoImg" src="assets/images/duck.png" alt="..." height= "400 px" width= "400 px"></img>
                <form onSubmit={this.handleSubmit}>
                  <FormGroup controlId="userName" bsSize="large">
                    <FormLabel> Username </FormLabel>{" "}
                    <FormControl
                      autoFocus
                      type="username"
                      value={this.state.username}
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
                  <Button block bsSize="large" type="submit">
                    Duck Duck GO{" "}
                  </Button>{" "}
                </form>{" "}
              </div>
            </Card.Body>
          </Card>
      </Container>
    );
  }
}

export default Login;
