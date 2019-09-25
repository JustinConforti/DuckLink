import React from "react";
import "./itemStyles.css";
import "../../pages/style.css";
import Button from "../Button"


export function StoreItem({
    id,
    image,
    onClick
})   {
    return (
        <div className = "fontPusher" >
            <div className ="card border-info mb-3">
          
            <div className ="card-body text-info">
                <div className  ="row">
                <div className = "col-4">
                    <button type="button" class="btn btn-outline-warning">Remove</button>
                    
                </div>
                <div className = "col-4">
                    <img id = "" src={image} alt="..." height= "80 px" width= "80 px"></img>   
                </div>
                <div className = "col-4">
                <Button
            onClick={onClick}
            type="success"
            className={id}
             >
              Add
          </Button>
                     </div>
                </div>
            </div>
            </div>
        </div>

    );
}

export default StoreItem;