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
          <Button
            block
            bsSize="large"
            type="submit"
          >
            register{" "}
          </Button>{" "}
        </form>{" "}
    </div> 

    // <div className ="screen">
    //   <div className="duck-loadout">
  
    //   </div>

    // </div>

                   // </form>{" "}
                 // </div>
               // </form>
              //</Card.Body>
            //</Card>
          //</Col>
        //</Row>
      //</Container>
    );
  }
}

export default Login;
