import React, { Component } from "react";
import $ from "jquery";
import "../pages/style.css";
import Nav from "../components/Nav/index";
import API from "../utils/API";

class MiniGames extends Component {
    state = {
        //user info here
        games: [
            {
                text: "Duck Dungeon",
                link: "dungeon",
                id: "game1"
            },
            {
                text: "Duck Pac-Man",
                link: "pacman",
                id: "game2"
            },
            {
                text: "Duck Minesweeper",
                link: "minesweeper",
                id: "game3"
            }
        ]
    };

    componentDidMount() {
        //add info here
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
        for(var i = 1;i <= 3;i++){
            
        }

        $(".gameLink").mouseover(function(e) {
            var link = e.target;
            link.style.color = "red";
            if(link.attributes.picValue != undefined){
                //$("#" + link.attributes.picValue.value).style.opacity = "1.0";
                var settedPicture = document.getElementById(link.attributes.picValue.value);
        var doodle = settedPicture.getContext("2d");
        var duckRatio = 150/603;
        var duckBody = new Image();
        duckBody.src = res.data.duckbody; //original size 603 x 446
        var resizeFactor = 1;
        duckBody.onload = function() {
            doodle.drawImage(duckBody, 10*resizeFactor, (20+10)*resizeFactor, 150*resizeFactor, 446 * duckRatio*resizeFactor);
            var duckEye = new Image();
            duckEye.src = res.data.eyes; //original size 80 x 87
            duckEye.onload = function() {
                doodle.drawImage(duckEye, 105*resizeFactor, (30+10)*resizeFactor, 80 * duckRatio*resizeFactor, 87 * duckRatio*resizeFactor);
            }
            var duckItem = new Image();
            duckItem.src = res.data.item; //original size 314 x 410
            duckItem.onload = function() {
                doodle.drawImage(duckItem, 25*resizeFactor, 0+10*resizeFactor, 314 * duckRatio*resizeFactor, 410 * duckRatio*resizeFactor);
                var duckWing = new Image();
                duckWing.src = res.data.wing; //original size 203 x 152
                duckWing.onload = function() {
                    doodle.drawImage(duckWing, 35*resizeFactor, (75+10)*resizeFactor, 203 * duckRatio*resizeFactor, 152 * duckRatio*resizeFactor);
                }
            }
            var duckHat = new Image();
            duckHat.src = res.data.duckhead; //original size 241 x 193
            duckHat.onload = function() {
                doodle.drawImage(duckHat, 80*resizeFactor, (-6+10)*resizeFactor, 241 * duckRatio*resizeFactor, 193 * duckRatio*resizeFactor);
            }
        }
        var duckBeak = new Image();
        duckBeak.src = res.data.beak; //original size 108 x 93
        duckBeak.onload = function() {
            doodle.drawImage(duckBeak, 128.5*resizeFactor, (40+12)*resizeFactor, 108 * duckRatio*resizeFactor, 93 * duckRatio*resizeFactor);
        }
            }

        });

        $(".gameLink").mouseout(function(e) {
            var link = e.target;
            link.style.color = "";
            if(link.attributes.picValue != undefined){
                //$("#" + link.attributes.picValue.value).style.opacity = "1.0";
                var settedPicture = document.getElementById(link.attributes.picValue.value);
            var doodle = settedPicture.getContext("2d");
            doodle.clearRect(0, 0, settedPicture.width, settedPicture.height);
                
            }
        });
    });
    };

    render() {
        return (
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img src="assets/images/ducksprites/dapper_duck.png" alt="dapper_duck" style={{width:"100%", height: "auto"}}/>
                    </div>
                    <div className="col-md-9 jumbotron">
                        <h3>Select a game you would like to play!</h3>
                    </div>
                </div>
                {this.state.games.map(game => (
                    <div className="row gameLink fontPusher">
                        <div className="col-md-3 duckavatar">
                            <canvas id={game.id} width="200px" height="200px"></canvas>
                        </div>
                        <div className="col-md-9 jumbotron" id = "gamesButton">
                            <a href={game.link}><h2 picValue={game.id}>{game.text}</h2></a>
                        </div>
                    </div>
                ))}
            </div> 
            <Nav />
            </div>
        )
    }
}

export default MiniGames;