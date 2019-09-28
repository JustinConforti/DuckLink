import React, { Component } from "react";
import $ from "jquery";
import swal from "sweetalert";
import API from "../utils/API";

class DuckPacman extends Component {
    state = {
        //add user info plz
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
        //game code
        var game = false;
var numberOfPellets = 0;
var intervalArray = [];
var chaseReturn;
var updatedLevel = parseInt(res.data.level);
if(isNaN(updatedLevel)){
    updatedLevel = 1;
}
function MovableObject(name, x_Coordinate, y_Coordinate) {
    this.name = name.toLowerCase();
    this.direction = undefined;
    this.eatingstate = "base";
    if(this.name === "pacman"){
        this.direction = "left";
    }
    this.x_Coordinate = x_Coordinate;
    this.y_Coordinate = y_Coordinate;
    this.picture = undefined;
    this.setPicture = function() {
        if(this.name === "pacman") {
            // var settedPicture = document.createElement("canvas");
            // settedPicture.width = document.getElementById("0-0").getBoundingClientRect().height + 25;
            // settedPicture.height = document.getElementById("0-0").getBoundingClientRect().height;
            // settedPicture.id = "duckPartner";
            // var doodle = settedPicture.getContext("2d");
            // var testPicture = new Image();
            // testPicture.onload=function() {
            //     doodle.drawImage(testPicture, 0, 0, settedPicture.width, settedPicture.height);
            // }
            // testPicture.src = "https://www.freepngimg.com/thumb/donald_duck/30606-8-donald-duck-clipart.png";
            // var saiyanhair = new Image();
            // saiyanhair.onload=function() {
            //     doodle.drawImage(saiyanhair, 0, (-1)*(settedPicture.height/10), settedPicture.width, (settedPicture.height/2));
            // }
            // saiyanhair.src = "https://123pngdownload.com/wp-content/uploads/2018/12/super-saiyan-3-hair-png-300x300.png";
            // this.picture = settedPicture;
        var ducky = this;
        var settedPicture = document.createElement("canvas");
        settedPicture.width = document.getElementById("0-0").getBoundingClientRect().height + 25;
        settedPicture.height = document.getElementById("0-0").getBoundingClientRect().height;
        settedPicture.id = "duckPartner";
        var doodle = settedPicture.getContext("2d");
        var duckRatio = 150/603;
        var duckBody = new Image();
        duckBody.src = res.data.duckbody; //original size 603 x 446
        duckBody.onload = function() {
            doodle.drawImage(duckBody, (10*0.5)-10, 20*0.5, 150*0.5, 446 * duckRatio*0.5);
            var duckEye = new Image();
            duckEye.src = res.data.eyes; //original size 80 x 87
            duckEye.onload = function() {
                doodle.drawImage(duckEye, (105*0.5)-10, 30*0.5, 80 * duckRatio*0.5, 87 * duckRatio*0.5);
            }
            var duckItem = new Image();
            duckItem.src = res.data.item; //original size 314 x 410
            duckItem.onload = function() {
                doodle.drawImage(duckItem, (25*0.5)-10, 0, 314 * duckRatio*0.5, 410 * duckRatio*0.5);
                var duckWing = new Image();
                duckWing.src = res.data.wing; //original size 203 x 152
                duckWing.onload = function() {
                    doodle.drawImage(duckWing, (50*0.5)-10, 75*0.5, 203 * duckRatio*0.5, 152 * duckRatio*0.5);
                }
            }
            var duckHat = new Image();
            duckHat.src = res.data.duckhead; //original size 241 x 193
            duckHat.onload = function() {
                if(ducky.eatingstate === "power"){
                    doodle.drawImage(duckHat, (80*0.5)-10, -6*0.5, 241 * duckRatio*0.5, 193 * duckRatio*0.5);
                }
            }
        }
        var duckBeak = new Image();
        duckBeak.src = res.data.beak; //original size 108 x 93
        duckBeak.onload = function() {
            doodle.drawImage(duckBeak, (128.5*0.5)-10, 40*0.5, 108 * duckRatio*0.5, 93 * duckRatio*0.5);
        }
        
        this.picture = settedPicture;
        } else {
            console.log("blinky is here");
            this.picture = $("<img>", {id: name.toLowerCase()});
            this.picture.attr("src", "assets/images/" + name.toLowerCase() + ".png"); //change to gif when updated pics to gifs
            this.picture.css({"height":"100%", "width":"100%"});
        }
    }
    this.flipMyPic = function() {
        var ducky = this;
        var settedPicture = document.createElement("canvas");
        settedPicture.width = document.getElementById("0-0").getBoundingClientRect().height + 25;
        settedPicture.height = document.getElementById("0-0").getBoundingClientRect().height;
        settedPicture.id = "duckPartner";
        var doodle = settedPicture.getContext("2d");
        var duckRatio = 150/603;
        doodle.translate(settedPicture.width, 0);
        doodle.scale(-1, 1);
        var duckItem = new Image();
        duckItem.src = res.data.item; //original size 314 x 410
        duckItem.onload = function() {
        doodle.drawImage(duckItem, (25*0.5)+15, 0, 314 * duckRatio*0.5, 410 * duckRatio*0.5);
        var duckBody = new Image();
        duckBody.src = res.data.duckbody; //original size 603 x 446
        duckBody.onload = function() {
            doodle.drawImage(duckBody, (10*0.5)+15, 20*0.5, 150*0.5, 446 * duckRatio*0.5);
            var duckEye = new Image();
            duckEye.src = res.data.eyes; //original size 80 x 87
            duckEye.onload = function() {
                doodle.drawImage(duckEye, (105*0.5)+15, 30*0.5, 80 * duckRatio*0.5, 87 * duckRatio*0.5);
            }
            var duckWing = new Image();
            duckWing.src = res.data.wing; //original size 203 x 152
            duckWing.onload = function() {
                doodle.drawImage(duckWing, (50*0.5)+15, 75*0.5, 203 * duckRatio*0.5, 152 * duckRatio*0.5);
            }
            var duckHat = new Image();
            duckHat.src = res.data.duckhead; //original size 241 x 193
            duckHat.onload = function() {
                if(ducky.eatingstate === "power"){
                    doodle.drawImage(duckHat, (80*0.5)+15, -6*0.5, 241 * duckRatio*0.5, 193 * duckRatio*0.5);
                }
            }
        }
    }
        var duckBeak = new Image();
        duckBeak.src = res.data.beak; //original size 108 x 93
        duckBeak.onload = function() {
            doodle.drawImage(duckBeak, (128.5*0.5)+15, 40*0.5, 108 * duckRatio*0.5, 93 * duckRatio*0.5);
        }
        this.picture = settedPicture;
    }
    this.moveInterval = undefined;
    this.moveUp = function() {
        if($("#" + this.x_Coordinate + "-" + (this.y_Coordinate - 1)).attr("status") != "free"){
            return;
        } else {
        this.y_Coordinate--;
        // if(this.name === "pacman") {
        //     this.picture.style.transform = "rotate(270deg)";
        // } else {
        //     this.direction = "up";
        // }
        this.direction = "up";
    }
    }
    this.moveDown = function() {
        if($("#" + this.x_Coordinate + "-" + (this.y_Coordinate + 1)).attr("status") != "free"){
            return;
        } else {
        this.y_Coordinate++;
        // if(this.name === "pacman"){
        //     this.picture.style.transform = "rotate(90deg)";
        // } else {
        //     this.direction = "down";
        // }
        this.direction = "down"
    }
    }
    this.moveLeft = function() {
        if(($("#" + (this.x_Coordinate - 1) + "-" + this.y_Coordinate).attr("status") != "free") && (getLocation(this) != "0-6")){
            return;
        } else {
        if(getLocation(this) === "0-6"){
            this.x_Coordinate = 11;
        } else {
            this.x_Coordinate--;
        }
        this.direction = "left";
    }
    }
    this.moveRight = function() {
        if(($("#" + (this.x_Coordinate + 1) + "-" + this.y_Coordinate).attr("status") != "free") && (getLocation(this) != "11-6")){
            return;
        } else {
        if(getLocation(this) === "11-6"){
            this.x_Coordinate = 0;
        } else {
            this.x_Coordinate++;
        }
        // if(this.name === "pacman"){
        //     this.picture.style.transform = "rotate(0deg)";
        // } else {
        //     this.direction = "right";
        // }
        this.direction = "right";
    }
    }
    this.setPicture();
    intervalArray.push(this);
}

function place(obj, removeObj) {
    if(removeObj){
        removeObject(obj);
    }
    $("#" + getLocation(obj)).append(obj.picture);
}

function removeObject(obj){
    console.log(obj.picture.id || obj.picture.attr("id"));
    var idToRemove = obj.picture.id || obj.picture.attr("id");
    $("#" + idToRemove).remove();
}


function getLocation(obj){
    var location = String(obj.x_Coordinate) + "-" + String(obj.y_Coordinate);
    return location;
}

function startLevel() {
    $("#startOver").remove();
    for(var i = 0;i < intervalArray.length;i++){
        clearInterval(intervalArray[i].moveInterval);
    }
    clearTimeout(chaseReturn);
    numberOfPellets = 0;
    $("#maze").empty();
    $("#status").text("Alright you're starting off! Careful not to get hit!");
    for(var i = 0;i < 12;i++){
        var newRow = $("<div>");
        newRow.addClass("row");
        for(var j = 0;j < 12;j++){
            var newBlock = $("<div>", {id: j + "-" + i});
            newBlock.addClass("col-md-1");
            newBlock.attr("status", "free");
            newBlock.css({"width":"100%", "height":"4em"});
            newBlock.css("background-color", "black");
            newRow.append(newBlock);
        }
        $("#maze").append(newRow);
    }
    var zonesToBlock = ["5-0", "1-1", "3-1", "5-1", "7-1", "9-1", "10-1", "1-3", "3-3", "8-3", "9-3", "10-3", "3-4", "0-5", "1-5", "8-5", "10-5", "11-5", "3-6", "4-6", "5-6" ,"6-6",
    "0-7", "1-7", "5-7", "9-7", "10-7", "11-7", "3-8", "7-8", "1-9", "5-9", "9-9", "10-9", "1-10", "2-10", "4-10", "5-10", "6-10", "8-10", "9-10", "10-10"];
    var noPelletZones = ["5-8", "0-6", "1-6", "10-6", "11-6"];
    var powerPelletZones = ["0-1", "11-1", "0-8", "11-8"];
    var ghostHouseZones = ["5-3", "6-3", "5-4", "6-4"];
    for(var i = 0;i < 12;i++){
        for(var j = 0;j < 12;j++){
            if(zonesToBlock.includes(j + "-" + i)){
                $("#" + j + "-" + i).css("background-color", "blue");
                $("#" + j + "-" + i).attr("status", "blocked");
            } else if(ghostHouseZones.includes(j + "-" + i)){
                $("#" + j + "-" + i).css("background-color", "aquamarine");
                $("#" + j + "-" + i).attr("status", "blocked");
            } else {
                if(powerPelletZones.includes(j + "-" + i)){
                    $("#" + j + "-" + i).css({"background-image":"url('assets/images/powerPellet1.png')", "background-size":"79px 64px"});
                    numberOfPellets++;
                } else {
                    if(!(noPelletZones.includes(j + "-" + i))){
                        $("#" + j + "-" + i).css({"background-image":"url('assets/images/pellet.png')", "background-size":"79px 64px"});
                        numberOfPellets++;
                    }
                }
            }
        }
    }
    var pacman = new MovableObject("Pacman", 5, 8);
    place(pacman, true);
    pacman.flipMyPic();
    pacman.picDirection = "left";
    pacman.moveInterval = setInterval(function() {
        switch(pacman.direction) {
            case "up":
                pacman.moveUp();
                place(pacman, true);
                if($("#" + getLocation(pacman)).css("background-image") != "none"){
                    console.log($("#" + getLocation(pacman)).css("background-image"));
                    if($("#" + getLocation(pacman)).css("background-image").indexOf("powerPellet1.png") != -1){
                        if(blinky.mode != "eaten"){
                            blinkyFrightened();
                        }
                    }
                    $("#" + getLocation(pacman)).css("background-image", "none");
                    numberOfPellets--;
                    gotAllPellets();
                }
                ateGhost();
                ghostCatch();
                break;
            case "down":
                pacman.moveDown();
                place(pacman, true);
                if($("#" + getLocation(pacman)).css("background-image") != "none"){
                    console.log($("#" + getLocation(pacman)).css("background-image"));
                    if($("#" + getLocation(pacman)).css("background-image").indexOf("powerPellet1.png") != -1){
                        if(blinky.mode != "eaten"){
                            blinkyFrightened();
                        }
                    }
                    $("#" + getLocation(pacman)).css("background-image", "none");
                    numberOfPellets--;
                    gotAllPellets();
                }
                ateGhost();
                ghostCatch();
                break;
            case "left":
                pacman.moveLeft();
                place(pacman, true);
                if($("#" + getLocation(pacman)).css("background-image") != "none"){
                    console.log($("#" + getLocation(pacman)).css("background-image"));
                    if($("#" + getLocation(pacman)).css("background-image").indexOf("powerPellet1.png") != -1){
                        if(blinky.mode != "eaten"){
                            blinkyFrightened();
                        }
                    }
                    $("#" + getLocation(pacman)).css("background-image", "none");
                    numberOfPellets--;
                    gotAllPellets();
                }
                ateGhost();
                ghostCatch();
                break;
            case "right":
                pacman.moveRight();
                place(pacman, true);
                if($("#" + getLocation(pacman)).css("background-image") != "none"){
                    console.log($("#" + getLocation(pacman)).css("background-image"));
                    if($("#" + getLocation(pacman)).css("background-image").indexOf("powerPellet1.png") != -1){
                        if(blinky.mode != "eaten"){
                            blinkyFrightened();
                        }
                    }
                    $("#" + getLocation(pacman)).css("background-image", "none");
                    numberOfPellets--;
                    gotAllPellets();
                }
                ateGhost();
                ghostCatch();
                break;
            default:
                break;
        }
    }, 300);
    var blinky = new MovableObject("Blinky", 5, 2);
    place(blinky, true);
    blinky.mode = "";
    blinkyChase();
    
    game = true;
    $(document).keyup(function(event) {
        if(game) {
            switch(event.which){
                case 37: //left
                    if($("#" + (pacman.x_Coordinate - 1) + "-" + pacman.y_Coordinate).attr("status") === "free"){
                        if(pacman.picDirection === "right"){
                            pacman.flipMyPic();
                        }
                        pacman.picDirection = "left";
                        pacman.direction = "left";
                    }
                    break;
                case 38: //up
                    if($("#" + pacman.x_Coordinate + "-" + (pacman.y_Coordinate - 1)).attr("status") === "free"){
                        pacman.direction = "up";
                    }
                    break;
                case 39: //right
                    if($("#" + (pacman.x_Coordinate + 1) + "-" + pacman.y_Coordinate).attr("status") === "free"){
                        if(pacman.picDirection === "left"){
                            pacman.setPicture();
                        }
                        pacman.picDirection = "right";
                        pacman.direction = "right";
                    }
                    break;
                case 40: //down
                    if($("#" + pacman.x_Coordinate + "-" + (pacman.y_Coordinate + 1)).attr("status") === "free"){
                        pacman.direction = "down";
                    }
                    break;
                default:
                    break;
            }
        }
    });
    function ghostCatch() {
        if((getLocation(pacman) === getLocation(blinky)) && blinky.mode === "chase"){
            lose();
        } else {
            return;
        }
    }
    function lose(){
        $("#status").text("Oh no! Your duck has been captured! (click \"Start Game\" to try again)");
        clearInterval(blinky.moveInterval);
        removeObject(blinky);
        clearInterval(pacman.moveInterval);
        pacman.picture.style.filter = "grayscale(100%)";
        var startOverBtn = $("<button>Start Game</button>");
        startOverBtn.attr("id", "startOver");
        $("#info").append(startOverBtn);
        game = false;
        $("#startOver").click(function() {
            startLevel();
        });
    }
    function gotAllPellets() {
        if(numberOfPellets === 0){
            win();
        }
    }
    function win() {
        clearInterval(blinky.moveInterval);
        removeObject(blinky);
        clearInterval(pacman.moveInterval);
        updatedLevel += 10;
        var newLevelString = updatedLevel.toString();
        game = false;
        API.ownDuckUpdate({
            image: newLevelString, 
            bodypart: "level"})
            .then(() => {
                $("#status").text("Great job! You collected all the pellets! Your level is now " + updatedLevel + "! Click \"Start Game\" to play again!");
                var startOverBtn = $("<button>Start Game</button>");
                startOverBtn.attr("id", "startOver");
                $("#info").append(startOverBtn);
                $("#startOver").click(function() {
                    startLevel();
                });
                })
               .catch(err => console.log(err.response.data))
    }
    function blinkyChase() {
        clearInterval(blinky.moveInterval);
        blinky.mode = "chase";
        blinky.picture.css("filter", "none");
        pacman.eatingstate = "base";
        if(pacman.picDirection === "left"){
            pacman.flipMyPic();
        } else {
            pacman.setPicture();
        }
        switch(blinky.direction){
            case "up":
                blinky.moveDown();
                place(blinky, true);
                break;
            case "down":
                blinky.moveUp();
                place(blinky, true);
                break;
            case "left":
                blinky.moveRight();
                place(blinky, true);
                break;
            case "right":
                blinky.moveLeft();
                place(blinky, true);
                break;
            default:
                break;
        }
        blinky.moveInterval = setInterval(function() {
            var targetZone = {
                x_Coordinate: pacman.x_Coordinate,
                y_Coordinate: pacman.y_Coordinate
            }
            var up = {
                name: "up",
                x_Coordinate: blinky.x_Coordinate,
                y_Coordinate: blinky.y_Coordinate - 1,
                distance: undefined
            }
            var down = {
                name: "down",
                x_Coordinate: blinky.x_Coordinate,
                y_Coordinate: blinky.y_Coordinate + 1,
                distance: undefined
            }
            var left = {
                name: "left",
                x_Coordinate: blinky.x_Coordinate - 1,
                y_Coordinate: blinky.y_Coordinate,
                distance: undefined
            }
            var right = {
                name: "right",
                x_Coordinate: blinky.x_Coordinate + 1,
                y_Coordinate: blinky.y_Coordinate,
                distance: undefined
            }
            var movements = [up, down, right, left];
            switch(blinky.direction){
                case "up":
                    movements.splice(movements.indexOf(down), 1);
                    break;
                case "down":
                    movements.splice(movements.indexOf(up), 1);
                    break;
                case "left":
                    movements.splice(movements.indexOf(right), 1);
                    break;
                case "right":
                    movements.splice(movements.indexOf(left), 1);
                    break;
                default:
                    break;
            } //removes opposite movements so no turning around
            for(var i = 0;i < movements.length;i++){
                if($("#" + getLocation(movements[i])).attr("status") != "free"){
                    if(!((getLocation(blinky)==="0-6" && movements[i].name === "left") || (getLocation(blinky)==="11-6" && movements[i].name === "right"))){
                        movements.splice(i, 1);
                        i--;
                    }
                    
                }
            } //removes movements to spots that aren't open
            
            for(var i = 0;i < movements.length;i++){
                var distanceSquared = Math.pow((targetZone.x_Coordinate - movements[i].x_Coordinate), 2) + Math.pow((targetZone.y_Coordinate - movements[i].y_Coordinate), 2);
                movements[i].distance = Math.sqrt(distanceSquared);
            } //gets the distance between the directions and the target
            for(var i = 0;i < movements.length;i++){
                for(var j = 1;j < movements.length;j++){
                    if(movements[j-1].distance > movements[j].distance){
                        var temp = movements[j-1];
                        movements[j-1] = movements[j];
                        movements[j] = temp;
                    }
                }
            }//should bubble sort the movements array from smallest to largest
            switch(movements[0]){
                case up:
                    blinky.moveUp();
                    place(blinky, true);
                    ghostCatch();
                    break;
                case down:
                    blinky.moveDown();
                    place(blinky, true);
                    ghostCatch();
                    break;
                case left:
                    blinky.moveLeft();
                    place(blinky, true);
                    ghostCatch();
                    break;
                case right:
                    blinky.moveRight();
                    place(blinky, true);
                    ghostCatch();
                    break;
                default:
                    break;
            }
    
        }, 400);
    }
    function blinkyFrightened() {
        clearInterval(blinky.moveInterval);
        clearTimeout(chaseReturn);
        blinky.mode = "frightened";
        blinky.picture.css("filter", "hue-rotate(90deg)");
        $("#status").text("Oh snap your duck got a Power Pellet! Now you can eat this guy! And your hat is here!");
        pacman.eatingstate = "power";
        if(pacman.picDirection === "left"){
            pacman.flipMyPic();
        } else {
            pacman.setPicture();
        }
        switch(blinky.direction){
            case "up":
                blinky.moveDown();
                place(blinky, true);
                break;
            case "down":
                blinky.moveUp();
                place(blinky, true);
                break;
            case "left":
                blinky.moveRight();
                place(blinky, true);
                break;
            case "right":
                blinky.moveLeft();
                place(blinky, true);
                break;
            default:
                break;
        }
        blinky.moveInterval = setInterval(function() {
            var targetZone = {
                x_Coordinate: 10,
                y_Coordinate: 1
            }
            var up = {
                name: "up",
                x_Coordinate: blinky.x_Coordinate,
                y_Coordinate: blinky.y_Coordinate - 1,
                distance: undefined
            }
            var down = {
                name: "down",
                x_Coordinate: blinky.x_Coordinate,
                y_Coordinate: blinky.y_Coordinate + 1,
                distance: undefined
            }
            var left = {
                name: "left",
                x_Coordinate: blinky.x_Coordinate - 1,
                y_Coordinate: blinky.y_Coordinate,
                distance: undefined
            }
            var right = {
                name: "right",
                x_Coordinate: blinky.x_Coordinate + 1,
                y_Coordinate: blinky.y_Coordinate,
                distance: undefined
            }
            var movements = [up, down, right, left];
            switch(blinky.direction){
                case "up":
                    movements.splice(movements.indexOf(down), 1);
                    break;
                case "down":
                    movements.splice(movements.indexOf(up), 1);
                    break;
                case "left":
                    movements.splice(movements.indexOf(right), 1);
                    break;
                case "right":
                    movements.splice(movements.indexOf(left), 1);
                    break;
                default:
                    break;
            } //removes opposite movements so no turning around
            for(var i = 0;i < movements.length;i++){
                if($("#" + getLocation(movements[i])).attr("status") != "free"){
                    if(!((getLocation(blinky)==="0-6" && movements[i].name === "left") || (getLocation(blinky)==="11-6" && movements[i].name === "right"))){
                        movements.splice(i, 1);
                        i--;
                    }
                    
                }
            } //removes movements to spots that aren't open
            
            for(var i = 0;i < movements.length;i++){
                var distanceSquared = Math.pow((targetZone.x_Coordinate - movements[i].x_Coordinate), 2) + Math.pow((targetZone.y_Coordinate - movements[i].y_Coordinate), 2);
                movements[i].distance = Math.sqrt(distanceSquared);
            } //gets the distance between the directions and the target
            for(var i = 0;i < movements.length;i++){
                for(var j = 1;j < movements.length;j++){
                    if(movements[j-1].distance > movements[j].distance){
                        var temp = movements[j-1];
                        movements[j-1] = movements[j];
                        movements[j] = temp;
                    }
                }
            }//should bubble sort the movements array from smallest to largest
            switch(movements[0]){
                case up:
                    blinky.moveUp();
                    place(blinky, true);
                    ateGhost();
                    break;
                case down:
                    blinky.moveDown();
                    place(blinky, true);
                    ateGhost();
                    break;
                case left:
                    blinky.moveLeft();
                    place(blinky, true);
                    ateGhost();
                    break;
                case right:
                    blinky.moveRight();
                    place(blinky, true);
                    ateGhost();
                    break;
                default:
                    break;
            }
    
        }, 450);
        chaseReturn = setTimeout(function() {
            if((blinky.mode === "frightened") && (game === true)){
                $("#status").text("Oh, the Power Pellet's worn off. Now he's mad. And your hat's gone...");
                blinkyChase();
            }
        }, 6000);

    }
    function blinkyEaten() {
        clearInterval(blinky.moveInterval);
        blinky.mode = "eaten";
        blinky.picture.css("filter", "grayscale(100%)");
        $("#status").text("Good job! You ate him! Now he'll be back for revenge! (also you gained two levels!)");
        updatedLevel += 2;
        switch(pacman.direction){
            case "up":
                blinky.moveUp();
                place(blinky, true);
                break;
            case "down":
                blinky.moveDown();
                place(blinky, true);
                break;
            case "left":
                blinky.moveLeft();
                place(blinky, true);
                break;
            case "right":
                blinky.moveRight();
                place(blinky, true);
                break;
            default:
                break;
        }
        blinky.moveInterval = setInterval(function() {
            var targetZone = {
                x_Coordinate: 5,
                y_Coordinate: 2
            }
            var up = {
                name: "up",
                x_Coordinate: blinky.x_Coordinate,
                y_Coordinate: blinky.y_Coordinate - 1,
                distance: undefined
            }
            var down = {
                name: "down",
                x_Coordinate: blinky.x_Coordinate,
                y_Coordinate: blinky.y_Coordinate + 1,
                distance: undefined
            }
            var left = {
                name: "left",
                x_Coordinate: blinky.x_Coordinate - 1,
                y_Coordinate: blinky.y_Coordinate,
                distance: undefined
            }
            var right = {
                name: "right",
                x_Coordinate: blinky.x_Coordinate + 1,
                y_Coordinate: blinky.y_Coordinate,
                distance: undefined
            }
            var movements = [up, down, right, left];
            switch(blinky.direction){
                case "up":
                    movements.splice(movements.indexOf(down), 1);
                    break;
                case "down":
                    movements.splice(movements.indexOf(up), 1);
                    break;
                case "left":
                    movements.splice(movements.indexOf(right), 1);
                    break;
                case "right":
                    movements.splice(movements.indexOf(left), 1);
                    break;
                default:
                    break;
            } //removes opposite movements so no turning around
            for(var i = 0;i < movements.length;i++){
                if($("#" + getLocation(movements[i])).attr("status") != "free"){
                    if(!((getLocation(blinky)==="0-6" && movements[i].name === "left") || (getLocation(blinky)==="11-6" && movements[i].name === "right"))){
                        movements.splice(i, 1);
                        i--;
                    }
                    
                }
            } //removes movements to spots that aren't open
            
            for(var i = 0;i < movements.length;i++){
                var distanceSquared = Math.pow((targetZone.x_Coordinate - movements[i].x_Coordinate), 2) + Math.pow((targetZone.y_Coordinate - movements[i].y_Coordinate), 2);
                movements[i].distance = Math.sqrt(distanceSquared);
            } //gets the distance between the directions and the target
            for(var i = 0;i < movements.length;i++){
                for(var j = 1;j < movements.length;j++){
                    if(movements[j-1].distance > movements[j].distance){
                        var temp = movements[j-1];
                        movements[j-1] = movements[j];
                        movements[j] = temp;
                    }
                }
            }//should bubble sort the movements array from smallest to largest
            switch(movements[0]){
                case up:
                    blinky.moveUp();
                    place(blinky, true);
                    if(getLocation(blinky) === "5-2"){
                        blinkyChase();
                    }
                    break;
                case down:
                    blinky.moveDown();
                    place(blinky, true);
                    if(getLocation(blinky) === "5-2"){
                        blinkyChase();
                    }
                    break;
                case left:
                    blinky.moveLeft();
                    place(blinky, true);
                    if(getLocation(blinky) === "5-2"){
                        blinkyChase();
                    }
                    break;
                case right:
                    blinky.moveRight();
                    place(blinky, true);
                    if(getLocation(blinky) === "5-2"){
                        blinkyChase();
                    }
                    break;
                default:
                    break;
            }
    
        }, 350);
    }
    function ateGhost() {
        if((getLocation(pacman) === getLocation(blinky)) && (blinky.mode === "frightened") ){
            blinkyEaten();
        }
    }
}

function countdown() {
    var counter = 3;
    var counterInterval;
    counterInterval = setInterval(function() {
        if(counter < 1){
            clearInterval(counterInterval);
            startLevel();
        }else {
            document.getElementById("status").innerText = "Game starting in " + counter;
            counter--;
        }
    }, 1000);
}


countdown();
        });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-12" id="maze">

                            </div>
                        </div>
                    </div>
                    <div className="col-md-2" id="info">
                        <h4 id="status" className="jumbotron"></h4>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default DuckPacman;