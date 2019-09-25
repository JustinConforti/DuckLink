import React, { Component } from "react";
import StoreItem from "../components/StoreItem/StoreItem.js";
import Nav from "../components/Nav/index";
// import { Link } from "react-router-dom";
import "./style.css";
import "../components/StoreItem/itemStyles.css"
import API from "../utils/API.js";
// import { throws } from "assert";

class Store extends Component {
    state = {
        level: "",
        items: []
    };


    componentWillMount() {
        console.log("loading component")
       API.myData ({})
       .then(res => {
         console.log("response in component:")
         console.log(res.data)
         let data = res.data
          this.setState({
             level: data.level
          })

          API.randomUsers({})
          .then(res => {
              this.setState({
                  items: res.data.data
              })

              console.log(this.state.items)

          })
       })
     }

     updateUserDuck = storeItem => API.duckUpdate(storeItem.target.className)
     .then(res => console.log(res.data.imageURL),
          
        API.ownDuckUpdate(res.data.imageURL).then(res => console.log(res)))
     .catch(err => console.log(err.response.data));

 render() {
    return (
        <div className = "container">
            <div className = "row">

                <div className="col">
                </div>

                    <div classNames="col-10">
                        <div className="card">
                            <div className="card-body card-body-window">
                            <h1 className="display-4 mx-auto" id = "StoreTitleStyling">DuckLink! STORE FRONT</h1>
                                {this.state.items.map((item, index) => (
                                    <StoreItem
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
               
             </div>
             <Nav />
        </div>
        

    

    );
    }
}

export default Store;