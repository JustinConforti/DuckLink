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
                                   <img id = "logoImg" src="assets/images/duck.png" alt="..." height= "300 px" width= "300 px"></img>
                                   <br/>
                                   <br/>
                                   <form className = "mx-auto fontPusher">
                                       <div className="form-group">
                                          <button id = "buttonStyleHome" type="button" class="btn btn-secondary btn-lg btn-block">USERNAME</button>
                                       </div>
                                       <div className="form-group">
                                          <button id = "buttonStyleHome" type="button" class="btn btn-secondary btn-lg btn-block">
                                             <span id = "duckRanking">Duck </span>
                                             RANKING: 
                                             <span id = "duckRanking" className = "animated infinite pulse"> 00</span> 
                                          </button>                                      
                                       </div>
                                       <div className="form-group">
                                          <button id = "buttonStyleHome" type="button" class="btn btn-secondary btn-lg btn-block animated infinite pulse">
                                             <span id = "greyPlayButton">play </span>
                                             <span className = "rainbow-text">GAMES</span></button>                                       
                                       </div>
                                       <div className="form-group">
                                          <button id = "buttonStyleHome" type="button" class="btn btn-secondary btn-lg btn-block">
                                             <span id = "duckRanking">DuckLink! </span>STORE</button>                                       
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

export default Homepage;