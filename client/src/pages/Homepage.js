import React, { Component } from "react";
import "./style.css";
import axios from 'axios';
import Nav from "../components/Nav";
import $ from "jquery";

import { Link } from "react-router-dom";



// import API from "../utils/API";
// import { throws } from "assert";
import API from "../utils/API";

class Homepage extends Component {
    state = {
   body: "",
   level: "",
   headgear: '',
   eyes: '',
   eyegear: '',
   wing: '',
   item: '',
   beak: '',
   username: ''
    };


 componentWillMount() {
    console.log("loading component")
   API.myData ({})
   .then(res => {
     console.log("response in component:")
     console.log(res.data)
     let data = res.data
     data.username = data.username.toUpperCase()
      this.setState({
         body: data.body,
         level: data.level,
         headgear: data.headgear,
         eyes: data.eyes,
         eyegear: data.eyegear,
         wing: data.wing,
         item: data.item,
         beak: data.beak,
         username: data.username
      })
      console.log(this.state.username);
      var settedPicture = document.createElement("canvas");
        settedPicture.width = document.getElementById("duckAvatar").getBoundingClientRect().height + 25;
        settedPicture.height = document.getElementById("duckAvatar").getBoundingClientRect().height;
        settedPicture.id = "duckPartner";
        var doodle = settedPicture.getContext("2d");
        var duckRatio = 150/603;
        var duckBody = new Image();
        duckBody.src = res.data.duckbody; //original size 603 x 446
        duckBody.onload = function() {
            doodle.drawImage(duckBody, 10*2, 20*2+10, 150*2, 446 * duckRatio*2);
            var duckEye = new Image();
            duckEye.src = res.data.eyes; //original size 80 x 87
            duckEye.onload = function() {
                doodle.drawImage(duckEye, 105*2, 30*2+10, 80 * duckRatio*2, 87 * duckRatio*2);
            }
            var duckItem = new Image();
            duckItem.src = res.data.item; //original size 314 x 410
            duckItem.onload = function() {
                doodle.drawImage(duckItem, 25*2, 0+10, 314 * duckRatio*2, 410 * duckRatio*2);
                var duckWing = new Image();
                duckWing.src = res.data.wing; //original size 203 x 152
                duckWing.onload = function() {
                    doodle.drawImage(duckWing, 35*2, 75*2+10, 203 * duckRatio*2, 152 * duckRatio*2);
                }
            }
            var duckHat = new Image();
            duckHat.src = res.data.duckhead; //original size 241 x 193
            duckHat.onload = function() {
                  doodle.drawImage(duckHat, 80*2, -6*2+10, 241 * duckRatio*2, 193 * duckRatio*2);
            }
        }
        var duckBeak = new Image();
        duckBeak.src = res.data.beak; //original size 108 x 93
        duckBeak.onload = function() {
            doodle.drawImage(duckBeak, 128.5*2, 40*2+15, 108 * duckRatio*2, 93 * duckRatio*2);
        }
        
        this.picture = settedPicture;
        $("#duckAvatar").append(settedPicture);
        
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
                           <div className="card-body card-body-window mx-auto">
                                    <h1 className="display-4 mx-auto" id = "titleTextStyling">DuckLink!</h1>
                                   <div id="duckAvatar" style={{width: "600px", height: "300px"}}></div>
                                   <br/>
                                   <br/>

                                   <form className = "mx-auto fontPusher">

                                       <div className="form-group">
                                          <button id = "buttonStyleHome" type="button" class="btn btn-secondary btn-lg btn-block">Duck Name: {this.state.username} </button>
                                       </div>

                                       <div className="form-group">
                                          <button id = "buttonStyleHome" type="button" class="btn btn-secondary btn-lg btn-block">
                                             <span id = "duckRanking">Duck </span>
                                             LEVEL: {this.state.level} 
                                             <span id = "duckRanking" className = "animated infinite pulse"></span> 
                                          </button>                                      
                                       </div>

                                        <Link to={"/minigames"}>
                                            <div className="form-group">
                                                <button id = "buttonStyleHome" type="button" class="btn btn-secondary btn-lg btn-block animated infinite pulse">
                                                    <span id = "greyPlayButton">play </span>
                                                    <span className = "rainbow-text">GAMES</span></button>                                       
                                            </div>
                                       </Link>

                                       <Link to={"/store"}>
                                            <div className="form-group">
                                                <button id = "buttonStyleHome" type="button" class="btn btn-secondary btn-lg btn-block">
                                                    <span id = "duckRanking">DuckLink! </span>STORE</button>                                       
                                            </div>
                                       </Link>

                                    </form>
                                   
                                       
                           </div>
                       </div>                               
                   </div>                               
               <div className="col">
               </div>
           </div>
    <Nav />

     </div>                               
   )}
  }

export default Homepage;