import React, { Component } from "react";
import $ from "jquery";

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
                link: "#",
                id: "game3"
            }
        ]
    };

    componentDidMount() {
        //add info here
        $(".gameLink").mouseover(function(e) {
            var link = e.target;
            link.style.color = "red";
            if(link.attributes.picValue != undefined){
                //$("#" + link.attributes.picValue.value).style.opacity = "1.0";
                $("#" + link.attributes.picValue.value).css({opacity: "1.0"});
            }

        });

        $(".gameLink").mouseout(function(e) {
            var link = e.target;
            link.style.color = "";
            if(link.attributes.picValue != undefined){
                //$("#" + link.attributes.picValue.value).style.opacity = "1.0";
                $("#" + link.attributes.picValue.value).css({opacity: "0.0"});
            }
        });
    };

    render() {
        return (
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
                    <div className="row gameLink">
                        <div className="col-md-3">
                            <img src="assets/images/ducksprites/duck_body_full.png" id={game.id} alt="full_duck" style={{width:"100%", height: "auto", opacity: "0.0"}}/>
                        </div>
                        <div className="col-md-9 jumbotron">
                            <a href={game.link}><h2 picValue={game.id}>{game.text}</h2></a>
                        </div>
                    </div>
                ))}
            </div> 
        )
    }
}

export default MiniGames;