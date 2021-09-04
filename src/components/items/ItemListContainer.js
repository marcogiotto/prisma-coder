import ItemCount from "./ItemCount";

const ItemListContainer = ({titulo,greeting,addCart,deleteProduct}) => {

    const onAdd = (count) => {
        addCart(count); 
    }

    const onDelete = ()=> {
        deleteProduct();
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h2>{titulo}</h2>
                    <p>{greeting}</p>
                    <ItemCount stock={5} initial={1} onDelete={onDelete} onAdd={onAdd} />
                </div>
            </div>

        </div>
    )
}

export default ItemListContainer;