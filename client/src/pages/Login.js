import React, { Component } from "react";
import "./style.css";
import { Container,Col,Card,CardBody,Row } from "react-bootstrap/";
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
              <Card.Img variant="top" src="https://www.fillmurray.com/360/200(16 kB)" alt="..." fluid />
              <Card.Body>
                <form classname="mx auto">
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

                        <div >
                      <Button variant="primary" size="lg" type="submit" id="button1" >
                        Duck Duck GO!{" "}
                      </Button>{" "}
                      <Button variant="secondary" size="sm" type="submit" id="button2" >
                        QUACK?{" "}
                      </Button>{" "}
                      </div>

                    </form>{" "}
                  </div>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
