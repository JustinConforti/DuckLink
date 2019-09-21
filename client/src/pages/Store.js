import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron"
// import Button from "../components/Button"
// import { Col, Row, Container } from "../components/Grid";
// import { Input, TextArea, FormBtn } from "../components/Form";
// import { List, ListItem } from "../components/List";
// import { Link } from "react-router-dom";
import "./style.css";
// import API from "../utils/API";
// import { throws } from "assert";

class Store extends Component {
    state = {

    };


 componentDidMount() {
    
 }

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
                                    <h1 className="display-4" id = "titleTextStyling">REGISTER</h1>
                                        <form className = "mx-auto fontPusher">
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
                                                <button type="button" className="btn btn-primary" id="buttonStyle">QUACK!!!</button>
                                            </div>
                                        </form>
                                  
                            </div>
                        </div>                               
                    </div>

                <div className="col">
                </div>

             </div>
        </div>
        

    

    );
    }
}

export default Store;