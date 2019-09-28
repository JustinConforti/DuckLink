import React, { Component } from "react";
import StoreItem from "../components/StoreItem/StoreItem.js";
import Nav from "../components/Nav/index";
// import { Link } from "react-router-dom";
import "./style.css";
import "../components/StoreItem/itemStyles.css"
import API from "../utils/API.js";
import Swal from "sweetalert2";
// import { throws } from "assert";

class Store extends Component {
    state = {
        level: "",
        items: [],
        image: "",
        bodypart: "",
    };


    componentWillMount() {
        console.log("loading component")
       API.myData ({})
       .then(res => {
         console.log("response in component:")
         console.log(res.data)
         let data = res.data
          this.setState({
             level: data.level,
          })

          API.randomUsers({})
          .then(res => {
              this.setState({
                  items: res.data.data,
              })

              console.log(this.state.items)

          })
       })
     }


     updateUserDuck = storeItem => API.duckUpdate(storeItem.target.className)
     .then(res => { 
         console.log(res)
         this.setState({
             image: res.data.imageURL,
             bodypart: res.data.Properties[0].bodypart,
         })
         console.log(this.state.image)
         console.log(this.state.bodypart)
         API.ownDuckUpdate({
             image: this.state.image, 
             bodypart: this.state.bodypart})
             .then(res => {
                 console.log(res)
                 Swal.fire(
					'Duck Updated!'
		    	    )
                 })
                .catch(err => console.log(err.response.data))
            })
        .catch(err => console.log(err.response.data))


     

 render() {
    return (
        <div className = "container">
            <div className = "row">

                <div className="col">
                </div>

                    <div classNames="col-10">
                            <div className="card-body card-body-window">
                            <h1 className="display-4 mx-auto" id = "StoreTitleStyling">DuckLink! STORE FRONT</h1>
                                {this.state.items.map((item, index) => (
                                    <StoreItem
                                    name={item.Properties[0].bodypart.toUpperCase()}
                                    color={item.Properties[0].color.toUpperCase()}
                                    level={item.Properties[0].level}
                                    key={index} 
                                    id={item._id}
                                    image={item.imageURL}
                                    onClick={this.updateUserDuck}
                                    />

                                ))}
                               
                                
                            </div>
                        </div>                               
                    </div>

                <div className="col">
                </div>
               
             <Nav />
        </div>
        

    

    );
    }
}


export default Store;