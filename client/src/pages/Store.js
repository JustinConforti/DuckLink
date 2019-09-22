import React, { Component } from "react";
import StoreItem from "../components/StoreItem/StoreItem.js";
// import Jumbotron from "../components/Jumbotron"
// import Button from "../components/Button"
// import { Col, Row, Container } from "../components/Grid";
// import { Input, TextArea, FormBtn } from "../components/Form";
// import { List, ListItem } from "../components/List";
// import { Link } from "react-router-dom";
import "./style.css";
import "../components/StoreItem/itemStyles.css"
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
                            <h1 className="display-4 mx-auto" id = "StoreTitleStyling">DuckLink! STORE FRONT</h1>
                                
								<StoreItem />
                                <StoreItem />
                                <StoreItem />
                                <StoreItem />
                                <StoreItem />
                                
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