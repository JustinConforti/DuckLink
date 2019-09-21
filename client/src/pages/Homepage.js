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
<div>

	{/* We will have the duck loudout on the top of the duck information, and the Placeholder
	whill go away when site is deployed. */}
	{/* <div className ="screen my-2">
			<div className="duck-loadout">

			</div>
	</div> */}
	
  <Card className ="wrapping-card mt-2" id="loudOut">
   <Row className="d-flex justify-content-center">   
				{/* Placeholder image */}
        <Image className ="thumbnail my-3" src="assets/images/duck.png" alt="duckLogo" roundedCircle />
   </Row>
      
      <Card border="warning" body className ="home-cards">Username</Card>
      <Card border="warning" body className ="home-cards">Ranking: 00</Card>
      <Card border="warning" body className ="home-cards">DuckCoin: 00</Card>
      <Button className ="home-cards">View Shop</Button>
  </Card>

</div>
    );
}
}

export default Homepage;