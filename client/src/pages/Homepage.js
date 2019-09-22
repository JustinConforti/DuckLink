import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import "./style.css";
import Row from 'react-bootstrap/Row';
// import API from "../utils/API";
// import { throws } from "assert";

class Homepage extends Component {
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
                           <div className="card-body card-body-window mx-auto">
                                    <h1 className="display-4 mx-auto" id = "titleTextStyling">DuckLink!</h1>
                                   <img id = "logoImg" src="assets/images/duck.png" alt="..." height= "250 px" width= "250 px"></img>
                                   <br/>
                                   <br/>
                                   <form className = "mx-auto fontPusher">
                                       <div className="form-group">
                                          <button id = "buttonStyleHome" type="button" class="btn btn-secondary btn-lg btn-block">Username: </button>
                                       </div>
                                       <div className="form-group">
                                          <button id = "buttonStyleHome" type="button" class="btn btn-secondary btn-lg btn-block">DuckCoin: 
                                             <span id = "duckCoin" className = "animated infinite pulse"> 00</span> 
                                          </button>                                      
                                       </div>
                                       <div className="form-group">
                                          <button id = "buttonStyleHome" type="button" class="btn btn-secondary btn-lg btn-block animated infinite pulse"><span className = "rainbow-text">Games</span></button>                                       
                                       </div>
                                       <div className="form-group">
                                          <button id = "buttonStyleHome" type="button" class="btn btn-secondary btn-lg btn-block">Store</button>                                       
                                       </div>
                                    </form>
                                   
                                       
                           </div>
                       </div>                               
                   </div>                               
           </div>
     </div>                               
   )}
  }

export default Homepage;