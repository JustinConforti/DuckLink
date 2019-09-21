import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";
class Register extends Component {
    state = {
            email: "",
            username: "",
            password: ""
    };
// componentDidMount() {
    
// }
handleChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
};
onClickSaveUser = (email, username, password) => {
    API.registerUser({
        email,
        username,
        password,
    })
        .then(res => {
        alert("Registration Completed!")
        console.log(res)
    })
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
                                    <h1 className="display-4" id = "titleTextStyling">REGISTER</h1>
                                        <form className = "mx-auto fontPusher">
                                                                                    <div class="form-group">
                                                                                            <input type="email" 
                                                                                            name="email" 
                                                                                            className="form-control" 
                                                                                            id="exampleInputEmail1" 
                                                                                            aria-describedby="emailHelp" 
                                                                                            placeholder="Enter email"
                                                                                            onChange={this.handleChange}
                                                                                            value={this.state.email}
                                                                                            />
                                                                                    </div>
                                                                                    <div class="form-group">
                                                                                            <input type="username"
                                                                                            name="username" 
                                                                                            className="form-control" 
                                                                                            id="exampleInputUsername1" 
                                                                                            aria-describedby="emailHelp" 
                                                                                            placeholder="Enter username"
                                                                                            onChange={this.handleChange}
                                                                                            value={this.state.username} />
                                                                                    </div>
                                                                                    <div class="form-group">
                                                                                            <input type="password"
                                                                                            name="password" 
                                                                                            className="form-control" 
                                                                                            id="exampleInputPassword1" 
                                                                                            placeholder="Password"
                                                                                            onChange={this.handleChange}
                                                                                            value={this.state.password} />
                                                                                    </div>
                                                                                    {/* <div class="form-group">
                                                                                            <input type="password"
                                                                                            name="password" 
                                                                                            className="form-control" 
                                                                                            id="exampleInputPassword2" 
                                                                                            placeholder="Reconfirm Password"
                                                                                            onChange={this.handleChange} />
                                                                                    </div>  */}
                                            <div className="form-group">
                                                                                                <button type="button" 
                                                                                                className="btn btn-primary" 
                                                                                                id="buttonStyle"
                                                                                                onClick={() => this.onClickSaveUser(this.state.email, this.state.username, this.state.password)}
                                                                                                >QUACK!!!</button>
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
