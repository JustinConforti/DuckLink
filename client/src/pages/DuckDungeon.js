import React, { Component } from "react";
import $ from "jquery";
import swal from "sweetalert";
import API from "../utils/API";

class DuckDungeon extends Component {
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

    componentDidMount() {
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
        //add user info to state plz
        var size; //how many blocks there will be. the grid's dimensions will be size * size
var blockHeight; //height attributed to each block. directly corresponds to the size to ensure the overall grid can fit without scrolling
var alt = 0;
var alwaysWhite = 0;
var alwaysBlack = 1;
var gridPattern = 2;
var haveBorder = "";
var numberOfBubbleballs;
var numberOfEnemies;
var enemyArray;
var game = {
    ready: false,
    level: 0,
    enemiesDefeated: 0,
    firstMovingEnemy: false,
    startUp: function(){
        this.ready = true;
    },
    end: function(){
        this.ready = false;
    },
    pause: function(){
        this.ready = false;
    },
    moveUp: function() {
        this.level++;
        document.title = "Level " + this.level + ":";
        switch(this.level){
            case 1:
                document.title += " Seriously? This is a Piece of Cake!";
                break;
            case 2:
                document.title += " Whoa! Things are Turning Up!";
                break;
            case 3:
                document.title += " In Case You Haven't Figured It Out, Use Spacebar to Shoot a Bubble!";
                break;
            case 4:
                document.title += " Your Duck Realizes It Cannot Grab The Cake Until an Enemy is Defeated";
                break;
            case 5:
                document.title += " Has an Enemy Started Chasing You Yet?";
                break;
            case 6:
                document.title += " Don't Ask How Your Duck Shoots Magical Bubbles. It's Just Magic!";
                break;
            case 7:
                document.title += " <Creator Forgot to Add a Title Here>";
                break;
            case 8:
                document.title += " Tip: Don't Try Feeding Cake to Ducks In Real Life";
                break;
            case 9:
                document.title += " I Know \"Duck Game\" is a Lazy Name But \"Ducktales\" Would've Gotten Me Sued";
                break;
            case 10:
                document.title += " You Got Me. I Didn't Forget to Add a Title for Level 7. I Was Just Lazy.";
                break;
            case 11:
                document.title += " <But This Time I Actually Forgot>";
                break;
            case 13:
                document.title += " Starting Now.";
                break;
            default:
                document.title += " Wow. Good Job! You Got Past the Levels I Made Specific Titles For (Well, aside from Level 20)! You Must be Really Good! Also Yes This Means If You Keep Going You'll Only See This Message.";
                break;
        }
    },
    enemyDefeated: function() {
        this.enemiesDefeated++;
        $("#" + getLocation(cake)).attr("status", "free");
    }
}
var duckPartner = {
    name: "duckPartner",
    state: "default",
    status: "free",
    direction: "right",
    x_Coordinate: 0,
    y_Coordinate: 0,
    picture: undefined,
    pictureDirection: "right",
    usedBubble: false,
    moveReady: true,
    moveInterval: undefined,
    setPicture: function() {
        var usedHue = undefined;
        if(this.picture){
            usedHue = this.picture.style.filter;
        } else {
            usedHue = "none";
        }
        var settedPicture = document.createElement("canvas");
        settedPicture.width = document.getElementById("0-0").getBoundingClientRect().height + 25;
        settedPicture.height = document.getElementById("0-0").getBoundingClientRect().height;
        settedPicture.id = "duckPartner";
        var doodle = settedPicture.getContext("2d");
        var duckRatio = 150/603;
        var duckBody = new Image();
        duckBody.src = res.data.duckbody; //original size 603 x 446
        duckBody.onload = function() {
            doodle.drawImage(duckBody, 10, 20, 150, 446 * duckRatio);
            var duckEye = new Image();
            duckEye.src = res.data.eyes; //original size 80 x 87
            duckEye.onload = function() {
                doodle.drawImage(duckEye, 105, 30, 80 * duckRatio, 87 * duckRatio);
            }
            var duckItem = new Image();
            duckItem.src = res.data.item; //original size 314 x 410
            duckItem.onload = function() {
                doodle.drawImage(duckItem, 25, 0, 314 * duckRatio, 410 * duckRatio);
                var duckWing = new Image();
                duckWing.src = res.data.wing; //original size 203 x 152
                duckWing.onload = function() {
                    doodle.drawImage(duckWing, 35, 75, 203 * duckRatio, 152 * duckRatio);
                }
            }
            var duckHat = new Image();
            duckHat.src = res.data.duckhead; //original size 241 x 193
            duckHat.onload = function() {
                if(duckPartner.state === "attack"){
                    doodle.drawImage(duckHat, 80, -6, 241 * duckRatio, 193 * duckRatio);
                }
            }
        }
        var duckBeak = new Image();
        duckBeak.src = res.data.beak; //original size 108 x 93
        duckBeak.onload = function() {
            doodle.drawImage(duckBeak, 128.5, 40, 108 * duckRatio, 93 * duckRatio);
        }
        
        this.picture = settedPicture;
        this.picture.style.filter = usedHue;
    },
    flipMyPic: function() {
        var usedHue = undefined;
        if(this.picture){
            usedHue = this.picture.style.filter;
        } else {
            usedHue = "none";
        }
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
        doodle.drawImage(duckItem, 25, 0, 314 * duckRatio, 410 * duckRatio);
        var duckBody = new Image();
        duckBody.src = res.data.duckbody; //original size 603 x 446
        duckBody.onload = function() {
            doodle.drawImage(duckBody, 10, 20, 150, 446 * duckRatio);
            var duckEye = new Image();
            duckEye.src = res.data.eyes; //original size 80 x 87
            duckEye.onload = function() {
                doodle.drawImage(duckEye, 105, 30, 80 * duckRatio, 87 * duckRatio);
            }
            var duckWing = new Image();
            duckWing.src = res.data.wing; //original size 203 x 152
            duckWing.onload = function() {
                doodle.drawImage(duckWing, 50, 75, 203 * duckRatio, 152 * duckRatio);
            }
            var duckHat = new Image();
            duckHat.src = res.data.duckhead; //original size 241 x 193
            duckHat.onload = function() {
                if(duckPartner.state === "attack"){
                    doodle.drawImage(duckHat, 80, -6, 241 * duckRatio, 193 * duckRatio);
                }
            }
        }
        var duckBeak = new Image();
        duckBeak.src = res.data.beak; //original size 108 x 93
        duckBeak.onload = function() {
            doodle.drawImage(duckBeak, 128.5, 40, 108 * duckRatio, 93 * duckRatio);
        }
        }
        this.picture = settedPicture;
        this.picture.style.filter = usedHue;
     
    },
    moveUp: function() {
        this.y_Coordinate--;
        this.direction = "up";
    },
    moveDown: function() {
        this.y_Coordinate++;
        this.direction = "down";
    },
    moveLeft: function() {
        this.x_Coordinate--;
        if(this.pictureDirection === "right"){
            this.flipMyPic();
            this.pictureDirection = "left";
        }
        this.direction = "left";
    },
    moveRight: function() {
        this.x_Coordinate++;
        if(this.pictureDirection === "left"){
            this.setPicture();
            this.pictureDirection = "right";
        }
        this.direction = "right";
    },
    setMoveReady: function() {
        this.moveReady = true;
    },
    getReady: function() {
        this.moveReady = false;
        this.moveInterval = setTimeout(function() {
            duckPartner.setMoveReady();
        }, 50);
    },
    amReady: function() {
        clearInterval(this.moveInterval);
        duckPartner.setMoveReady();
    },
    bubbleOut: function() {
        powerSphere.x_Coordinate = -90;
        powerSphere.y_Coordinate = -90;
        this.state = "attack";
        if(this.pictureDirection === "left"){
            this.flipMyPic();
        } else {
            this.setPicture();
        }
        if(!this.usedBubble){
            game.pause();
            swal({
                title: "Whoa! New Power!",
                text: "A new power-up has been attained! Hit a specific key on the keyboard to access it! Hint: Make sure you have a lot of space!",
                icon: "info",
                button: "Got it!",
            })
            .then(() => {
                game.startUp();
                this.usedBubble = true;
            })
        }
    },
    resetDucky: function() {
        this.state = "default";
        this.direction =  "right";
        this.x_Coordinate = 0;
        this.y_Coordinate = 0;
        this.setPicture();
    }
}

var cake = {
    x_Coordinate: 0,
    y_Coordinate: 0,
    picture: undefined,
    status: "free",
    setPicture: function() {
        var settedPicture = $("<img>");
        settedPicture.attr("src", "assets/images/cake.png");
        settedPicture.attr("style", "width:100%; height:auto");
        settedPicture.attr("id", "cake");
        this.picture = settedPicture;
    },
    setLocation: function() {
        this.x_Coordinate = Math.floor(Math.random() * size);
        this.y_Coordinate = Math.floor(Math.random() * size);
        if(inVicinity(this, duckPartner)){
            this.setLocation();
        } else {
            this.setPicture();
        }
    }
}

var powerSphere = {
    x_Coordinate: undefined,
    y_Coordinate: undefined,
    timesSetLocation: 0,
    status: "free",
    picture: undefined,
    setPicture: function() {
        var settedPicture = $("<img>");
        settedPicture.attr("src", "assets/images/sparky.gif");
        settedPicture.attr("style", "width:100%; height:100%");
        settedPicture.attr("id", "powerSphere");
        this.picture = settedPicture;
    },
    setLocation: function() {
        this.x_Coordinate = Math.floor(Math.random() * size);
        this.y_Coordinate = Math.floor(Math.random() * size);
        if(sameLocation(this, duckPartner) || inVicinity(cake, this)){
            this.setLocation();
            return;
        } else {
            this.setPicture();
            return;
        }
    }
}

function Bubbleball(x_Coordinate, y_Coordinate, direction, class_number, filter){
    this.x_Coordinate = x_Coordinate;
    this.y_Coordinate = y_Coordinate;
    this.status = "free";
    this.direction = direction;
    this.picture = $("<img>");
    this.picture.attr("id", "bubbleball" + class_number);
    this.picture.attr("src","assets/images/attack.gif");
    this.picture.attr("style", "width:100%; height:100%");
    this.picture.css("filter", filter);
    this.interval = undefined;
    this.moveLeft = function() {
        this.x_Coordinate--;
    }
    this.moveRight = function() {
        this.x_Coordinate++;
    }
    this.moveUp = function() {
        this.y_Coordinate--;
    }
    this.moveDown = function() {
        this.y_Coordinate++;
    }
    this.move = function() {
        switch(this.direction){
            case "left":
                this.moveLeft();
                break;
            case "right":
                this.moveRight();
                break;
            case "up":
                this.moveUp();
                break;
            case "down":
                this.moveDown();
                break;
            default:
                break;
        }
    }
}

function Enemy(x_Coordinate, y_Coordinate, class_number, movable){
    this.x_Coordinate = x_Coordinate;
    this.y_Coordinate = y_Coordinate;
    this.status = "blockedByEnemy";
    this.picture = $("<img>");
    this.picture.attr("id", "enemy" + class_number);
    this.picture.attr("src", "assets/images/enemy.gif");
    this.picture.attr("style", "width:100%; height:100%");
    this.movable = movable;
    this.moveInterval = undefined;
}

function atSide(obj) {
    if((obj.y_Coordinate < 0)||(obj.x_Coordinate < 0)){
        if(obj.y_Coordinate < 0) {
            obj.y_Coordinate = size-1;
        } else {
            obj.x_Coordinate = size-1;
        }
    }
    if((obj.y_Coordinate >= size)||(obj.x_Coordinate >= size)){
        if(obj.y_Coordinate >= size) {
            obj.y_Coordinate = 0;
        } else {
            obj.x_Coordinate = 0;
        }
    }
}

function relativeLocation(obj1, obj2){
    if(obj1.x_Coordinate === obj2.x_Coordinate && obj1.y_Coordinate > obj2.y_Coordinate){
        return "up";
    } else
    if(obj1.x_Coordinate === obj2.x_Coordinate && obj1.y_Coordinate < obj2.y_Coordinate){
        return "down";
    } else
    if(obj1.y_Coordinate === obj2.y_Coordinate && obj1.x_Coordinate > obj2.x_Coordinate){
        return "left";
    } else
    if(obj1.y_Coordinate === obj2.y_Coordinate && obj1.x_Coordinate < obj2.x_Coordinate){
        return "right";
    } else
    if(obj1.y_Coordinate > obj2.y_Coordinate && obj1.x_Coordinate > obj2.x_Coordinate){
        return "upper-left";
    } else
    if(obj1.y_Coordinate > obj2.y_Coordinate && obj1.x_Coordinate < obj2.x_Coordinate){
        return "upper-right";
    } else
    if(obj1.y_Coordinate < obj2.y_Coordinate && obj1.x_Coordinate > obj2.x_Coordinate){
        return "lower-left";
    } else
    if(obj1.y_Coordinate < obj2.y_Coordinate && obj1.x_Coordinate < obj2.x_Coordinate){
        return "lower-right";
    } else { return; }
}

function atSides(obj){
    if((obj.y_Coordinate < 0)||(obj.x_Coordinate < 0)){
        return true;
    } else if((obj.y_Coordinate >= size)||(obj.x_Coordinate >= size)){
        return true;
    } else {
        return false;
    }
}

function sameLocation(obj1, obj2){
    if(getLocation(obj1) === getLocation(obj2)){
        return true;
    } else {
        return false;
    }
}

function place(obj, removeObj) {
    if(removeObj){
        removeObject(obj);
    }
    if(obj.name === "duckPartner"){
        $("#" + getLocation(obj)).empty();
    }
    $("#" + getLocation(obj)).append(obj.picture);
    $("#" + getLocation(obj)).attr("status", obj.status);
}

function removeObject(obj){
    if(obj.name === "duckPartner"){
        if($("#" + obj.picture.id).length > 0){
            $("#" + obj.picture.id).remove();
            if(obj.status != "free"){
                $("#" + getLocation(obj)).attr("status", "free");
            }
        }
    } else {
    if($("#" + obj.picture.attr("id")).length > 0){
        $("#" + obj.picture.attr("id")).remove();
        if(obj.status != "free"){
            $("#" + getLocation(obj)).attr("status", "free");
        }
    }
}
}


function getLocation(obj){
    var location = obj.x_Coordinate + "-" + obj.y_Coordinate;
    return location;
}

function setLocation(obj, x_Coordinate, y_Coordinate){
    obj.x_Coordinate = x_Coordinate;
    obj.y_Coordinate = y_Coordinate;
}

function surroundingArea(obj1){
    var surrounding_x_Coordinates = [obj1.x_Coordinate, obj1.x_Coordinate + 1, obj1.x_Coordinate - 1];
    var surrounding_y_Coordinates = [obj1.y_Coordinate, obj1.y_Coordinate + 1, obj1.y_Coordinate - 1];
    var surrounding_Coordinates = [];
    for(var i = 0;i < surrounding_x_Coordinates.length;i++){
        for(var j = 0;j < surrounding_y_Coordinates.length;j++){
            var new_coordinate = surrounding_x_Coordinates[i] + "-" + surrounding_y_Coordinates[j];
            surrounding_Coordinates.push(new_coordinate);
        }
    }
    return surrounding_Coordinates;
}

function inVicinity(obj1, obj2){
    if(surroundingArea(obj1).includes(getLocation(obj2))){
        return true;
    } else {
        return false;
    }
}

function inEnemyZone(obj){
    var answer = false;
    for(var i = 0;i < enemyArray.length;i++){
        if(sameLocation(enemyArray[i], obj)){
            answer = true;
        }
    }
    return answer;
}

function enemyIntervalShift() {
    if((duckPartner.picture.style.filter === "none") || (game.level === 19)){
        return 0;
    } else {
        if(game.level < 16){
            return 200;
        } else {
            return 100;
        }
    }
}
function countdown() {
    size = 6;
    blockHeight = 8;
    var counter = 3;
    var counterInterval;
    counterInterval = setInterval(function() {
        if(counter < 1){
            clearInterval(counterInterval);
            startGame();
        }else {
            document.getElementsByClassName("duckCountdown")[0].innerText = counter;
            counter--;
        }
    }, 1000);
}

function altBlackWhite(x){
    if(x === 2){
        return alt;
    } else if(x === 1){
        return alwaysBlack;
    } else if(x === 0){
        return alwaysWhite;
    }
}
function startGame() {

$("#dungeonContainer").empty();
function blackWhite(x){
    if(x === 0){
        alt++;
        return "green";
    } else {
        alt--;
        return "blue";
    }
}

function whiteBlack(x){
    if(x === 0){
        return "blue";
    } else {
        return "green";
    }
}

function setGame(x, y){
    swal({
        title: "The Level Begins!",
        text: "Your duck partner wants some cake! Use the arrow keys and go to the cake to make him happy!",
        icon: "info",
        button: "OK",
    })
    .then(() => {
        beginGame(x,y);
    });
}
function beginGame(x, y){
    game.startUp();
    game.moveUp();
    duckPartner.resetDucky();
    setLocation(duckPartner, x, y);
    cake.setLocation();
    resetStage();
    numberOfBubbleballs = 0;
    numberOfEnemies = 0;
    enemyArray = [];

    place(duckPartner, true);
    place(cake, true);
    if(game.level === 2){
        powerSphere.setLocation();
        place(powerSphere, true);
        game.pause();
        swal({
            title: "What's this?",
            text: "A new power is unlocked! Go to the power sphere for your duck partner to transform!",
            icon: "warning",
            button: "Got it!",
        })
        .then(() => {
            game.startUp();
        });
    }
    if(game.level >= 3){
        if(game.level===3){
            game.pause();
            swal({
                title: "Obstacles Arrive to Astonish!",
                text: "Oh no! Enemies from the land of Poorly Drawn MS Paint Sprites have arrived to stop you from getting the cake! But I hear they can't stand bubbles...",
                icon: "warning",
                button: "Let's Kick Some Butt!"
            })
            .then(() => {
                game.startUp();
            });
        };

        powerSphere.setLocation();
        place(powerSphere, true);
        if(game.enemiesDefeated < 3){
            var cake_x_Coordinates = [cake.x_Coordinate, cake.x_Coordinate + 1, cake.x_Coordinate - 1];
            var cake_y_Coordinates = [cake.y_Coordinate, cake.y_Coordinate + 1, cake.y_Coordinate - 1];
            for(var i = 0;i < cake_x_Coordinates.length;i++){
                for(var j = 0;j < cake_y_Coordinates.length;j++){
                    var newEnemy = new Enemy(cake_x_Coordinates[i], cake_y_Coordinates[j], numberOfEnemies, false);
                    if(sameLocation(newEnemy, cake)){
                        //avoids enemy placed at same location as cake
                    } else {
                        place(newEnemy, true);
                        enemyArray.push(newEnemy);
                        $("#" + getLocation(cake)).attr("status", "blocked");
                        numberOfEnemies++;
                    }
                }
            }
    } else {
        var movingEnemy = new Enemy(cake.x_Coordinate, cake.y_Coordinate, numberOfEnemies, true);
        enemyArray.push(movingEnemy);
        $("#" + getLocation(cake)).attr("status", "blocked");
        numberOfEnemies++;
        if(movingEnemy.movable) {
            movingEnemy.moveInterval = setInterval(function() {
                switch(relativeLocation(movingEnemy, duckPartner)){
                    case "up":
                        removeObject(movingEnemy);
                        $("#" + getLocation(cake)).attr("status", "blocked");
                        movingEnemy.y_Coordinate--;
                        if(sameLocation(movingEnemy, cake) || sameLocation(movingEnemy, powerSphere)){
                            movingEnemy.y_Coordinate++;
                            place(movingEnemy, true);
                        } else {
                            if(sameLocation(movingEnemy, duckPartner)){
                                removeObject(movingEnemy);
                                clearInterval(movingEnemy.moveInterval);
                                youLose();
                            } else {
                                place(movingEnemy, true);
                            }
                        }
                        break;
                    case "down":
                        removeObject(movingEnemy);
                        $("#" + getLocation(cake)).attr("status", "blocked");
                        movingEnemy.y_Coordinate++;
                        if(sameLocation(movingEnemy, cake) || sameLocation(movingEnemy, powerSphere)){
                            movingEnemy.y_Coordinate--;
                            place(movingEnemy, true);
                        } else {
                            if(sameLocation(movingEnemy, duckPartner)){
                                removeObject(movingEnemy);
                                clearInterval(movingEnemy.moveInterval);
                                youLose();
                            } else {
                                place(movingEnemy, true);
                            }
                        }
                        break;
                    case "right":
                        removeObject(movingEnemy);
                        $("#" + getLocation(cake)).attr("status", "blocked");
                        movingEnemy.x_Coordinate++;
                        if(sameLocation(movingEnemy, cake) || sameLocation(movingEnemy, powerSphere)){
                            movingEnemy.x_Coordinate--;
                            place(movingEnemy, true);
                        } else {
                            if(sameLocation(movingEnemy, duckPartner)){
                                removeObject(movingEnemy);
                                clearInterval(movingEnemy.moveInterval);
                                youLose();
                            } else {
                                place(movingEnemy, true);
                            }
                        }
                        break;
                    case "left":
                        removeObject(movingEnemy);
                        $("#" + getLocation(cake)).attr("status", "blocked");
                        movingEnemy.x_Coordinate--;
                        if(sameLocation(movingEnemy, cake) || sameLocation(movingEnemy, powerSphere)){
                            movingEnemy.x_Coordinate++;
                            place(movingEnemy, true);
                        } else {
                            if(sameLocation(movingEnemy, duckPartner)){
                                removeObject(movingEnemy);
                                clearInterval(movingEnemy.moveInterval);
                                youLose();
                            } else {
                                place(movingEnemy, true);
                            }
                        }
                        break;
                    case "upper-left":
                        removeObject(movingEnemy);
                        $("#" + getLocation(cake)).attr("status", "blocked");
                        movingEnemy.x_Coordinate--;
                        movingEnemy.y_Coordinate--;
                        if(sameLocation(movingEnemy, cake) || sameLocation(movingEnemy, powerSphere)){
                            movingEnemy.x_Coordinate++;
                            movingEnemy.y_Coordinate++;
                            place(movingEnemy, true);
                        } else {
                            if(sameLocation(movingEnemy, duckPartner)){
                                removeObject(movingEnemy);
                                clearInterval(movingEnemy.moveInterval);
                                youLose();
                            } else {
                                place(movingEnemy, true);
                            }
                        }
                        break;
                    case "upper-right":
                        removeObject(movingEnemy);
                        $("#" + getLocation(cake)).attr("status", "blocked");
                        movingEnemy.x_Coordinate++;
                        movingEnemy.y_Coordinate--;
                        if(sameLocation(movingEnemy, cake) || sameLocation(movingEnemy, powerSphere)){
                            movingEnemy.x_Coordinate--;
                            movingEnemy.y_Coordinate++;
                            place(movingEnemy, true);
                        } else {
                            if(sameLocation(movingEnemy, duckPartner)){
                                removeObject(movingEnemy);
                                clearInterval(movingEnemy.moveInterval);
                                youLose();
                            } else {
                                place(movingEnemy, true);
                            }
                        }
                        break;
                    case "lower-left":
                        removeObject(movingEnemy);
                        $("#" + getLocation(cake)).attr("status", "blocked");
                        movingEnemy.x_Coordinate--;
                        movingEnemy.y_Coordinate++;
                        if(sameLocation(movingEnemy, cake) || sameLocation(movingEnemy, powerSphere)){
                            movingEnemy.x_Coordinate++;
                            movingEnemy.y_Coordinate--;
                            place(movingEnemy, true);
                        } else {
                            if(sameLocation(movingEnemy, duckPartner)){
                                removeObject(movingEnemy);
                                clearInterval(movingEnemy.moveInterval);
                                youLose();
                            } else {
                                place(movingEnemy, true);
                            }
                        }
                        break;
                    case "lower-right":
                        removeObject(movingEnemy);
                        $("#" + getLocation(cake)).attr("status", "blocked");
                        movingEnemy.x_Coordinate++;
                        movingEnemy.y_Coordinate++;
                        if(sameLocation(movingEnemy, cake) || sameLocation(movingEnemy, powerSphere)){
                            movingEnemy.x_Coordinate--;
                            movingEnemy.y_Coordinate--;
                            place(movingEnemy, true);
                        } else {
                            if(sameLocation(movingEnemy, duckPartner)){
                                removeObject(movingEnemy);
                                clearInterval(movingEnemy.moveInterval);
                                youLose();
                            } else {
                                place(movingEnemy, true);
                            }
                        }
                        break;
                    default:
                        break;
                }
            }, Math.max((1300 - (100 * game.level)), 50, enemyIntervalShift()));
        }
    }
    }
    if(game.level === 20){
        document.title = "Wow! You Made It To Level 20! You Win!";
        for(var i = 0;i < size;i++){
            for(var j = 0;j < size;j++){
                $("#" + i + "-" + j).css("background-color","transparent");
            }
        }
        $("#dungeonContainer").css({"background-image":"url('assets/images/happy-cynda.gif')", "background-size":"cover"});
        game.ready = false;
        for(var i = 0;i < enemyArray.length;i++){
            enemyArray[i].picture.attr("src","assets/images/cake.png");
            if(enemyArray[i].movable){
                clearInterval(enemyArray[i].moveInterval);
            }
        }
    }
}

for(var i = 0;i < size;i++){ //creating the board
    var newRow = $("<div>");
    var nexti = i+1
    var previ = i-1;
    var colSize = 12/size;
    newRow.addClass("row " + nexti);
    for(var j = 0;j < size;j++){
        if(j===0){ //checks if it is the start of a row
            if(i%2 === 1){ //checks if i is odd
                alt = 1;
            } else {
                alt = 0;
            }
        }
        var newBlock = $("<div>"); //creates the div element
        newBlock.addClass("col-md-" + colSize); //makes the class col-md-1 so it should be 12x12
        newBlock.attr("style","width: 100%; height: " + blockHeight + "em; " + haveBorder + "border-color: " + whiteBlack(altBlackWhite(gridPattern)) + "; background-color: " + blackWhite(altBlackWhite(gridPattern))); //should be black and white
        newBlock.attr("id", j + "-" + i); //sets coordinates like 0-1... I don't like the - though, but 0,1 feels clunky... gah!
        newBlock.attr("onBubble","false");
        newBlock.attr("status", "free");
        newRow.append(newBlock);
    }
    $("#dungeonContainer").append(newRow);
}


//$(document).keyup(keyPress);
function keyPress(event) {
    if(game.ready){switch(event.which) {
        
    case 37:
        if(duckPartner.moveReady || duckPartner.direction != "left"){
            if(duckPartner.direction != "left"){
                duckPartner.amReady();
            }
            duckPartner.moveLeft(); //going left
            atSide(duckPartner);
            if($("#" + getLocation(duckPartner)).attr("status") != "free"){
                duckPartner.x_Coordinate++;
                atSide(duckPartner);
                break;
            } else {
                moveYourDuck();
                duckPartner.getReady();
                break;
            }
        } else {
            break;
        }       
    
    case 38:
        if(duckPartner.moveReady || duckPartner.direction != "up"){
            if(duckPartner.direction != "up"){
                duckPartner.amReady();
            }
            duckPartner.moveUp(); //going up
            atSide(duckPartner);
            if($("#" + getLocation(duckPartner)).attr("status") != "free"){
                duckPartner.y_Coordinate++;
                atSide(duckPartner);
                break;
            } else {
                moveYourDuck();
                duckPartner.getReady();
                break;
            }
        } else {
            break;
        } 

    case 39:
        if(duckPartner.moveReady || duckPartner.direction != "right"){
            if(duckPartner.direction != "right"){
                duckPartner.amReady();
            }
            duckPartner.moveRight(); //going right
            atSide(duckPartner);
            if($("#" + getLocation(duckPartner)).attr("status") != "free"){
                duckPartner.x_Coordinate--;
                atSide(duckPartner);
                break;
            } else {
                moveYourDuck();
                duckPartner.getReady();
                break;
            }
        } else {
            break;
        }

    case 40:
        if(duckPartner.moveReady || duckPartner.direction != "down"){
            if(duckPartner.direction != "down"){
                duckPartner.amReady();
            }
            duckPartner.moveDown(); //going down
            atSide(duckPartner);
            if($("#" + getLocation(duckPartner)).attr("status") != "free"){
                duckPartner.y_Coordinate--;
                atSide(duckPartner);
                break;
            } else {
                moveYourDuck();
                duckPartner.getReady();
                break;
            }
        } else {
            break;
        }
    
    case 32://if spacebar is hit
    if(duckPartner.state === "attack"){
        var newBubbleball = new Bubbleball(duckPartner.x_Coordinate, duckPartner.y_Coordinate, duckPartner.direction, numberOfBubbleballs, "hue-rotate(90deg)");
        var stopEarly = false;
        numberOfBubbleballs++;
        newBubbleball.move();
        if(!(sameLocation(newBubbleball, cake) || sameLocation(newBubbleball, duckPartner) || atSides(newBubbleball) || $("#" + getLocation(newBubbleball)).attr("status") === "blocked")){
            for(var i = 0;i < enemyArray.length;i++){
                if(sameLocation(enemyArray[i], newBubbleball)){
                    removeObject(enemyArray[i]);
                    clearInterval(enemyArray[i].moveInterval);
                    enemyArray.splice(i, 1);
                    stopEarly = true;
                    game.enemyDefeated();
                }
            }
            if($("#" + getLocation(newBubbleball)).is(":empty")){
                place(newBubbleball, true);
            }

            setTimeout(function() {
                removeObject(newBubbleball);
                newBubbleball.move();
            }, 300)
            if(!stopEarly){
                newBubbleball.interval = setInterval(function() {
                    if(sameLocation(newBubbleball, cake) || atSides(newBubbleball) || stopEarly || $("#" + getLocation(newBubbleball)).attr("status") === "blocked"){
                        clearInterval(newBubbleball.interval);
                        removeObject(newBubbleball);
                    } else {
                        if(inEnemyZone(newBubbleball)){
                            for(var i = 0;i < enemyArray.length;i++){
                                if(sameLocation(enemyArray[i], newBubbleball)){
                                    removeObject(enemyArray[i]);
                                    clearInterval(enemyArray[i].moveInterval);
                                    enemyArray.splice(i, 1);
                                    stopEarly = true;
                                    game.enemyDefeated();
                                }
                            }
                        }
                        removeObject(newBubbleball);
                        if($("#" + getLocation(newBubbleball)).is(":empty")){
                            place(newBubbleball, true);
                        }
                        if(!stopEarly){
                            newBubbleball.move();
                        }
                    }
                }, 400)
            }
        }
    }
    break;

    case 65: //a to change hue
        if(duckPartner.picture.style.filter === "none"){
            duckPartner.picture.style.filter = "hue-rotate(90deg)";
        } else {
            duckPartner.picture.style.filter = "none";
        }
        break;

    default:
        break;
    }
    }
}

var currentKeyListener = keyPress;

$(document).on("keydown", currentKeyListener);
$(document).off("keyup", function(){
    clearTimeout(duckPartner.moveInterval);
    duckPartner.moveReady = true;
});

function moveYourDuck(){
    if(sameLocation(duckPartner, cake)){
        place(duckPartner, true);
        gotCake();
    } else {
        if(sameLocation(duckPartner, powerSphere)){
            removeObject(powerSphere);
            duckPartner.bubbleOut();
            place(duckPartner, true);
        } else {
            $("#" + getLocation(duckPartner)).empty();
            place(duckPartner, true);
        }
    }
}

function gotCake() {
        $("#" + getLocation(duckPartner)).empty();
        for(var i = 0;i < enemyArray.length;i++){
            if(enemyArray[i].movable){
                removeObject(enemyArray[i]);
                clearInterval(enemyArray[i].moveInterval);
            }
        }
        var victoryCynda = $("<img>", {id:"victoryCynda"});
        victoryCynda.attr("src", "assets/images/happy-cynda.gif");
        victoryCynda.attr("style", "width:100%; height:100%");
        $("#" + getLocation(duckPartner)).append(victoryCynda);
        game.end();
        swal({
            title: "Victory!",
            text: "You got the cake! Click the \"Next Level\" button (or click outside this window) to continue!",
            icon: "success",
            buttons: {
                continue: {
                    text: "Next Level",
                    value: "continue",
                }
            },
        })
        .then((choice) => {
            switch(choice) {
                case "continue":
                    duckPartner.picture.style.filter = "none";
                    setGame(0,0);
                    break;

                default:
                    duckPartner.picture.style.filter = "none";
                    setGame(0,0);
                    break;

            }
        });

        /*$("#victoryCynda").on("mousedown", function() {
            setGame(0, 0);
        });*/
    }

function resetStage(){ //lol more like remove all the bubbleballs
    for(var i = 0;i < size;i++){
        for(var j = 0;j < size;j++){
            $("#" + j + "-" + i).empty();
            $("#" + j + "-" + i).attr("onBubble","false");
            $("#" + j + "-" + i).attr("status", "free");
        }
    }
}

function youLose() {
    game.end();
    duckPartner.picture.style.filter = "grayscale(100%)";
    swal({
        title: "Defeat!",
        text: "Game Over! Click \"Try Again\" (or outside this window) to try again!",
        icon: "error",
        buttons: {
            continue: {
                text: "Try Again",
                value: "continue",
            }
        }
    })
    .then((choice) => {
        switch(choice) {
            case "continue":
                game.level--;
                duckPartner.picture.style.filter = "none";
                setGame(0,0);
                break;

            default:
                game.level--;
                duckPartner.picture.style.filter = "none";
                setGame(0,0);
                break;

        }
    });
}
setGame(0, 0);
}
countdown();
});

    };


    render() {
        return (
            <div id="dungeonContainer" className="container">
                <div className="jumbotron">
                    <h1 style={{color: "red"}}>Game starting in: <span className="duckCountdown"></span></h1>
                </div>
            </div>
        )
    }
}

export default DuckDungeon;