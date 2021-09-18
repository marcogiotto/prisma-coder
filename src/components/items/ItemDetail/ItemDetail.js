import './ItemDetail.css';

const ItemDetail = ({item}) => {
    
    return(
            <>
            <div className=" row item-detail-container">
                <div className="col-sm-12 col-md-6 item-detail-img">
                    <img src={`/imgs/${item.imgUrl}`} alt={item.name} />
                </div>
                <div className="col-sm-12 col-md-6 item-detail-data">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <div>
                        <ul>
                            <li>$ {item.price}</li>
                            <li>
                                {
                                     item.stock > 0 ?
                                     <span className="item-con-stock">En stock</span> :
                                     <span className="item-sin-stock">Sin stock</span>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>    
            </>
    );
}

export default ItemDetail;