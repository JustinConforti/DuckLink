import React, { Component } from "react";
import $ from "jquery";
import swal from "sweetalert";
import "./minesweeperStyle.css";
import { parse } from "querystring";
import API from "../utils/API";

class DuckMinesweeper extends Component {
    state = {

    };

    componentDidMount() {
        console.log("loading component")
        API.myData ({})
        .then(res => {
          console.log("response in component:")
          console.log(res.data)
          let data = res.data;
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
        var bombArray; //array of all the coordinates with bombs
        var safeArray;
        var size = 12;
        var colSize = 12/size;
        var numberOfBombs = 12;
        var gameOver;
        var bombsRemaining;
        var updatedLevel = parseInt(res.data.level);
        if(isNaN(updatedLevel)){
            updatedLevel = 1;
        }
        var timer;
        var timerInterval;
        var timerStart = false;
        var highScore;
        if(localStorage.getItem("highScore") != null){
            highScore = parseInt(localStorage.getItem("highScore"));
        } else {
            highScore = 3600; //initial high score will be an hour
        }
    
        function startGame() {
            swal({
                title: "Welcome to Minesweeper!",
                text: "Click a block to open it! Right-click a block to flag it! Don't hit a mine (oh, well, goose...)!",
                icon: "info",
                button: "OK"
            });
            $("#mineZone").empty();
            bombArray = [];
            safeArray = [];
            timer = 0;
            timerStart = false;
            gameOver = false;
            bombArray.length = 0;
            bombsRemaining = numberOfBombs;
            var overRow = $("<div>", {"class":"row over-row"});
            $("#mineZone").append(overRow);
            var infoColumn = $("<div>",{"class":"col-md-1 info-column"});
            overRow.append(infoColumn);
            var infoButton = $("<button>",{id:"infoButton"});
            infoColumn.append(infoButton);
            var moreMinesButton = $("<button>",{id:"moreMinesButton"});
            moreMinesButton.text("Click to adjust the number of mines.");
            infoColumn.append(moreMinesButton);
            var timerHeader = $("<p>", {id:"timerHeader"});
            timerHeader.text("Time: " + secondsToMinutes(timer));
            timerHeader.css({"background-color": "white"});
            infoColumn.append(timerHeader);
            var highScoreHeader = $("<p>", {id:"highScoreHeader"});
            highScoreHeader.css({"background-color":"white"});
            highScoreHeader.text("High Score: " + secondsToMinutes(highScore));
            infoColumn.append(highScoreHeader);
            moreMinesButton.on("click", function() {
                var totalSize = (12 * 12);

                swal("Enter the amount of mines (geese) you would like. (Please enter a number greater than 0 and less than " + totalSize + ".)", {
                    content: "input",
                })
                .then((value) => {
                    if(parseInt(value) <= 0 || parseInt(value) >= totalSize || isNaN(parseInt(value))){
                        swal("Enter an actual number between 0 and " + totalSize + " please.");
                    } else {
                        numberOfBombs = parseInt(value);
                        clearInterval(timerInterval);
                        startGame();
                    }
                });
            });
            var gameColumn = $("<div>", {"class":"col-md-11 game-column"});
            overRow.append(gameColumn);
            for(var i = 0;i < size;i++){ //setting up the board
                var newRow = $("<div>");
                newRow.attr("class", "row new-row");
                for(var j = 0;j < size;j++){
                    var newBlock = $("<div>");
                    newBlock.attr("class", "new-block col-md-" + colSize);
                    newBlock.attr("id", "block" + j + "-" + i);
                    newRow.append(newBlock);
                    var newButton = $("<button>");
                    newButton.attr("id", j + "-" + i);
                    newButton.css("background-color", "lightgreen");
                    newButton.addClass("new-button");
                    newButton.addClass("mineButton");
                    newButton.attr("hasBomb","false");
                    newButton.attr("hasFlag","false");
                    newBlock.append(newButton);
                }
                $(".game-column").append(newRow);
            }
            updateRemaining();
    
            for(var i = 0;i < numberOfBombs;i++){
                var bombX = Math.floor(Math.random() * size);
                var bombY = Math.floor(Math.random() * size);
                var bombCoordinate = bombX + "-" + bombY;
                if(!bombArray.includes(bombCoordinate)){
                    bombArray.push(bombCoordinate); //if this coordinate isn't already there, add it
                    $("#" + bombCoordinate).attr("hasBomb", "true");
                } else {
                    i--; //else try again to make sure we get 90 bombs
                }
            }
    
            for(var i = 0;i < size;i++){
                for(var j = 0;j < size;j++){
                    if($("#" + j + "-" + i).attr("hasBomb") === "false"){
                        safeArray.push(getCoordinate(j, i));
                    }
                }
            }
    
    
    
            $(".new-button").on("click", function(e) {
                    if(!timerStart){
                        timerInterval = setInterval(function() {
                            $("#timerHeader").text("Time: " + secondsToMinutes(timer));
                            timer++;
                        }, 1000);
                        timerStart = true;
                    }
                    if(!gameOver){
                        var x = parseInt(getX(e.target.id));
                        var y = parseInt(getY(e.target.id));
                        var bombArea = getCoordinate(x,y);
                        if(bombArray.includes(bombArea)){ //if the user hits a bomb
                            youLose();
                        } else {
                                open(x,y);
                                checkBoard();
                            }
                    }
                }
            )
    
            $(".new-button").on("contextmenu", function(e) {
                if(!timerStart){
                    timerInterval = setInterval(function() {
                        timer++;
                        $("#timerHeader").text("Time: " + secondsToMinutes(timer));
                    }, 1000);
                    timerStart = true;
                }
                if(!gameOver){
                    var x = parseInt(getX(e.target.id));
                    var y = parseInt(getY(e.target.id));
                    flagMe(x,y);
                    return false;
                }
            })
        }
    
        
    
    
        function open(x, y){
            if($("#" + x + "-" + y).attr("hasFlag") === "true"){
                return;
            }
            if(bombArray.includes(getCoordinate(x, y))){ //if the user hits a bomb
                youLose();
            } else if(x >= size || y >= size || x < 0 || y < 0 || ($("#" + x + "-" + y).is(":disabled"))){
                return;
            } else {
            $("#" + x + "-" + y).attr("disabled", "disabled");
            $("#" + x + "-" + y).css("background-color","rgb(135, 206, 250)");
            var bombNumber = $("<div>");
            bombNumber.addClass("checked" + x + "-" + y);
            bombNumber.addClass("checkedZone");
            bombNumber.on("dblclick", function() { 
                if(gameOver) {
                    return;
                } else {
                    openSurrounding(x,y);
                }
            });
            if(bombsAround(x,y) != 0){
                bombNumber.text(bombsAround(x,y));
                $("#" + x + "-" + y).append(bombNumber);
                return;
            } else {
                for(var yChange = -1;yChange < 2;yChange++){
                    for(var xChange = -1;xChange < 2;xChange++){
                        if(xChange*yChange === xChange - yChange){ //if it is coordinate (x,y)
                            continue;
                        } else {
                            open(x + xChange, y + yChange);
                        }
                    }
                }
            }
            }
        }
    
        function flagMe(x,y){
            if(gameOver){return;}
                if($("#" + x + "-" + y).attr("hasFlag") === "true"){
                    $("#" + x + "-" + y).removeAttr("disabled");
                    $("#" + x + "-" + y).attr("hasFlag", "false");
                    var flag = document.getElementById("flag" + x + "-" + y);
                    var flagButton = document.getElementById(x + "-" + y);
                    flagButton.removeChild(flag);
                    bombsRemaining++;
                    updateRemaining();
                } else {
                    if(bombsRemaining > 0){
                        $("#" + x + "-" + y).attr("hasFlag", "true");
                        $("#" + x + "-" + y).attr("disabled", "disabled");
                        var flag = $("<img>");
                        flag.attr("src", "assets/images/flag.png");
                        flag.css({"width":"100%","height":"100%"});
                        flag.attr("id", "flag" + x + "-" + y);
                        flag.on("contextmenu", function() {
                            flagMe(x,y);
                            return false;
                        })
                        $("#" + x + "-" + y).append(flag);
                        bombsRemaining--;
                        updateRemaining();
                    }
                }
        }
    
        function youLose(){
            clearInterval(timerInterval);
            var body = new Image();
            body.src = "assets/images/gooseBody.png";
                    body.onload=function() {
                        var foot = new Image();
                        foot.src = "assets/images/gooseFoot.png";
                        foot.onload=function() {
                            console.log('foot loaded');
                            var wing = new Image();
                            wing.src = "assets/images/gooseWing.png";
                            wing.onload=function() {
                                for(var i = 0;i < bombArray.length;i++){
                                    if($("#" + bombArray[i]).is(":disabled")){
                                        continue;
                                    } else {
                                        console.log(bombArray[i]);
                                        var settedPicture = document.createElement("canvas");
                                        settedPicture.width = document.getElementById("0-0").getBoundingClientRect().height + 25;
                                        settedPicture.height = document.getElementById("0-0").getBoundingClientRect().height;
                                        // settedPicture.id = "duckPartner";
                                        var bingo = 8/10;
                                        var doodle = settedPicture.getContext("2d");
                                        doodle.drawImage(foot, 10, 35, settedPicture.width*bingo/2, settedPicture.height*bingo/2);
                                        doodle.drawImage(body, 0, 0, settedPicture.width*bingo, settedPicture.height*bingo);
                                        doodle.drawImage(wing, -20, 20, settedPicture.width*bingo, (settedPicture.height*bingo/2));
                                        document.getElementById(bombArray[i]).append(settedPicture);
                                        gameOver = true;
                                    }
                            }
                        }
                    }
                }
            $("#infoButton").text("Try Again!");
            $("#infoButton").on("click", startGame);
            swal({
                title: "Game Over!",
                text: "Click the \"Try Again!\" button to try again!",
                icon: "error",
            });
        }
    
        function youWin(){
            gameOver = true;
            clearInterval(timerInterval);
            $("#infoButton").text("Play Again!");
            $("#infoButton").on("click", startGame);
            if(timer < highScore){
                $("#highScoreHeader").text("New High Score!");
                highScore = timer;
                localStorage.setItem("highScore", highScore);
            }
            updatedLevel += numberOfBombs;
            var newLevelString = updatedLevel.toString();
            API.ownDuckUpdate({
                image: newLevelString, 
                bodypart: "level"})
                .then(() => {
                    swal({
                        title: "Victory!",
                        text: "You win! Your level is now " + updatedLevel + "! Click the \"Play Again!\" button to play again!",
                        icon: "success",
                    });
                    })
                .catch(err => console.log(err.response.data))
        }
    
        function openSurrounding(x, y){
            var flagged = 0;
            for(var yChange = -1;yChange < 2;yChange++){
                for(var xChange = -1;xChange < 2;xChange++){
                    if($("#" + (x + xChange) + "-" + (y + yChange)).attr("hasFlag") === "true"){
                        flagged++;
                    }
                }
            }
            if(parseInt($(document.getElementsByClassName("checked" + getCoordinate(x,y))).text()) <= flagged){
                for(var yChange = -1;yChange < 2;yChange++){
                    for(var xChange = -1;xChange < 2;xChange++){
                        if(xChange*yChange === xChange - yChange){ //if it is coordinate (x,y)
                            continue;
                        } else {
                            open(x + xChange, y + yChange);
                        }
                    }
                }
            } else {
                return;
            }
            checkBoard();
        }
    
        function bombsAround(x, y){
            var count = 0;
            for(var yChange = -1;yChange < 2;yChange++){
                for(var xChange = -1;xChange < 2;xChange++){
                    if(xChange*yChange === xChange - yChange){ //if it is coordinate (x,y)
                        continue;
                    } else {
                        if($("#" + (x + xChange) + "-" + (y + yChange)).attr("hasBomb") === "true"){
                            count++;
                        }
                    }
                }
            }
            return count;
        }
    
        function checkBoard(){
            var zeroIfAllClicked = 0;
            for(var i = 0;i < safeArray.length;i++){
                if($("#" + safeArray[i]).css("background-color") === "rgb(135, 206, 250)"){
                    continue;
                } else {
                    zeroIfAllClicked++;
                }
            }
            if(zeroIfAllClicked === 0){
                youWin();
            }
        }
    
        function getX(coordinateString){ //x-y
            var whereIsDash = coordinateString.indexOf("-");
            var resultX = coordinateString.slice(0, whereIsDash);
            return resultX;
        }
    
        function getY(coordinateString){
            var whereIsDash = coordinateString.indexOf("-");
            var resultY = coordinateString.slice(whereIsDash + 1);
            return resultY;
        }
    
        function getCoordinate(x, y){
            var coordinateToGet = x + "-" + y;
            return coordinateToGet;
        }
    
        function updateRemaining(){
            if(bombsRemaining === 1){
                $("#infoButton").text(bombsRemaining + " mine remaining");
            } else {
                $("#infoButton").text(bombsRemaining + " mines remaining");
            }
        }
    
        function secondsToMinutes(time){
            var timeInMinutes = Math.floor(time/60); //should give the integer of minutes within the time, so time of 67 would be 1
            var timeInSeconds = time - (timeInMinutes * 60); //should give the seconds after the minutes are extracted
            var displayedMinutes;
            var displayedSeconds;
            if(timeInMinutes < 10){
                displayedMinutes = "0" + timeInMinutes.toString();
            } else {
                displayedMinutes = timeInMinutes.toString();
            }
            if(timeInSeconds < 10){
                displayedSeconds = "0" + timeInSeconds.toString();
            } else {
                displayedSeconds = timeInSeconds.toString();
            }
            var displayedTime = displayedMinutes + ":" + displayedSeconds;
            return displayedTime;
        }
    
        $("#startBtn").on("click", function(){
            startGame();
        });
    });
    
    };

    render() {
        return (
            <div className="container" id="mineZone">
                <div className="row">
                    <div className="col-md-6">
                        <button id="startBtn">
                            Click Me to Play Some Minesweeper!
                        </button>
                    </div>
                </div>
            </div>
        )
    }


}

export default DuckMinesweeper;