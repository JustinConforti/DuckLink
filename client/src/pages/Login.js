import React, { Component } from "react";
import "./style.css";
import { Container,Col,Card,CardBody,CardHeader,Row } from "react-bootstrap/";
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
        <Row className="justify-content-md-center" >
          <Col md ="auto" >
            <Card style={{ width: '50rem'}}>
              <Card.Header as="h5">LogIn</Card.Header>
              <Card.Img variant="top" src="https://www.fillmurray.com/360/200(16 kB)" alt="..." fluid />
              <Card.Body>
                <form>
                  <div className="Register">
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
                      <Button variant="primary" size="lg" type="submit">
                        Duck Duck GO!{" "}
                      </Button>{" "}
                        
                      <Button variant="secondary" size="sm" type="submit">
                        QUACK?{" "}
                      </Button>{" "}

                    </form>{" "}
                  </div>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      // create button to register page 
    );
  }
}

export default Login;
