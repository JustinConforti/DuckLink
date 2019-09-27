import React, { Component } from "react";
import "./style.css";
import axios from 'axios';
import Nav from "../components/Nav";
<<<<<<< HEAD
=======
import $ from "jquery";
import { Link } from "react-router-dom";
>>>>>>> 788a9e8... bug fixes and added links.


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
      console.log(this.state.username)
   })
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
                                          <button id = "buttonStyleHome" type="button" class="btn btn-secondary btn-lg btn-block">Duck Name: {this.state.username} </button>
                                       </div>

                                       <div className="form-group">
                                          <button id = "buttonStyleHome" type="button" class="btn btn-secondary btn-lg btn-block">
                                             <span id = "duckRanking">Duck </span>
                                             RANKING: 
                                             <span id = "duckRanking" className = "animated infinite pulse"> 00</span> 
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