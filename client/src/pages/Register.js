import React, { Component } from "react";
import "./style.css";


class Register extends Component {
    state = {
    
    };


 componentDidMount() {
    
 }

 handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

render() {
    return (
<div class = "wrapper container">
    <div class="tab-content card" id="nav-tabContent">
           
        <div class = "card-body">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <div class = "row">
                    <h1 class = "mx-auto">Register</h1>
                </div>
           

            <div class = "row">
                <form class = "mx-auto">
                    
                    <div class="form-group">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>

                    <div class="form-group">
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>

                    <div class="form-group">
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
                    </div>

                    <div class="form-group">
                        <button type="button" class="btn btn-outline-primary">Go</button>
                    </div>

                </form>
            </div>
        </div>
        </div>
    </div>
    
    </div>


    )}
}


    export default Register;