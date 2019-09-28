import React from "react";
import "./itemStyles.css";
import "../../pages/style.css";
import Button from "../Button"


export function StoreItem({
    id,
    image,
    onClick,
    name,
    color,
    level
})   {
    return (
        <div className = "fontPusher" id = "buttonWacker">
            <div className ="card border-info mb-3">
          
            <div className ="card-body text-info">
                <div className  ="row">
                    <div className = "col-4">
                        <h5>Duck Part: {name}</h5>
                        <h5>Color: {color}</h5>
                    </div>

                <div className = "col-4">
                    <img id = "" src={image} alt="..." height= "80 px" width= "80 px"></img>   
                </div>

                <div className = "col-4">
                        <Button
                            onClick={onClick}
                            type="success"
                            bodypart={name}
                            className={id}
                            >
                            Add
                        </Button>
                            <h5 className="mt-4">Level: {level}</h5>
                     </div>
                </div>
            </div>
            </div>
        </div>

    );
}

export default StoreItem;