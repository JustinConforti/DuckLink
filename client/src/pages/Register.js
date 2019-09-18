import React, { Component } from "react";
import Nav from "../components/Nav";
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
        <div className = "container">
            <div className = "row">

                <div className="col">
                </div>

                    <div classNames="col-10">
                        <div className="card">
                            <div className="card-body card-body-window">
                                    <img id = "logoImg" src="assets/images/duck.png" alt="..." height= "400 px" width= "400 px"></img>
                                    <h1 className="display-4" id = "titleTextStyling">REGISTRATION</h1>
                                        <form className = "mx-auto">
                                            <div className="form-group">
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
                                            </div>
                                            <div className="form-group">
                                                <button type="button" className="btn btn-outline-primary">Go</button>
                                            </div>
                                        </form>
                                  
                            </div>
                        </div>                               
                    </div>

                <div className="col">
                </div>

             </div>
        </div>
        

    

    )}
}


    export default Register;