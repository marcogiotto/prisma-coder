// import ItemCount from "./ItemCount";
import './Item.css';
const Item = ({product}) => {

    return (
        <li className="item-container col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3 ">
            <div className="item d-grid ">
                <div >
                
                        <h2>{product.name}</h2>
                        <p>$ 15000</p>
                    
                    {/* {
                        product.stock > 0 ?
                        <ItemCount stock={product.stock} initial={1}/> :
                        <div className="alert alert-danger">
                                Sin stock
                        </div>
                    } */}
                    
                </div>
                <button className="btn btn-outline-dark btn-detalle"> Ver detalle</button>
                   <img  src="/imgs/1m.png" alt={product.name} /> 
                   
            </div>
        </li>
    )
};

export default Item;