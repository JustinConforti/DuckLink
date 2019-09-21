import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import "./style.css";
import Row from 'react-bootstrap/Row';
import axios from 'axios';
// import API from "../utils/API";
// import { throws } from "assert";
import API from "../utils/API";

class Homepage extends Component {
    state = {

    };


 componentDidMount() {
    console.log("loading component")
   axios.get(API.myData)
   .then(res => {
     console.log(res)
   })
}
    


render() {
    return (
       <div>
 <div className ="screen">
    <div className="duck-loadout">

    </div>
 </div>

<div>
    <Card className ="wrapping-card" style={{ width: '55rem', height: '48em' }}>
   <Row>   
      <Col xs={6} md={4}>
        <Image className ="thumbnail" src="https://i7.pngguru.com/preview/719/829/196/duck-cartoon-small-yellow-duck-cartoon-vector-thumbnail.jpg" roundedCircle />
      </Col>
   </Row>
      <Card border="warning" body className ="home-cards">Username</Card>
      <Card border="warning" body className ="home-cards">Ranking: 00</Card>
      <Card border="warning" body className ="home-cards">DuckCoin: 00</Card>
      <Button className ="home-cards">View Shop</Button>


    </Card>
   </div>
</div>
    );
}
}

export default Homepage;