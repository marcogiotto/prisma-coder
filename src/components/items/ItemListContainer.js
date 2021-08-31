import { useState } from "react";

const ItemListContainer = ({titulo,greeting}) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h2>{titulo}</h2>
                    <p>{greeting}</p>
                    
                </div>
            </div>

        </div>
    )
}

export default ItemListContainer;