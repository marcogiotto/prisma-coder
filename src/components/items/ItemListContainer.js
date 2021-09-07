import { useState ,useEffect } from 'react';
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const productsList = [
    {
        id: 1,
        name: 'Remera Blanca',
        description: 'Remera muy blanca',
        stock: 5,
        imgUrl: '',
        price: 1500
    },
    {
        id: 2,
        name: 'Remera Rosa',
        description: 'Remera muy blanca',
        stock: 0,
        imgUrl: '',
        price: 1200
    },
    {
        id: 3,
        name: 'Remera Negra',
        description: 'Remera muy blanca',
        stock: 5,
        imgUrl: '',
        price: 2500
    },
    {
        id: 4,
        name: 'Remera Negra',
        description: 'Remera muy blanca',
        stock: 5,
        imgUrl: '',
        price: 1500
    },
    {
        id: 5,
        name: 'Remera Negra',
        description: 'Remera muy blanca',
        stock: 5,
        imgUrl: '',
        price: 1800
    },
    {
        id: 6,
        name: 'Remera Negra',
        description: 'Remera muy blanca',
        stock: 5,
        imgUrl: '',
        price: 1700
    }
]

const getProducts = () => {

   
    return new Promise((resolve,reject) => {
        
        setTimeout(()=> {
                resolve(productsList);
        },2000);
    });
};
const ItemListContainer = ({titulo,greeting,addCart,deleteProduct}) => {
    
    const [products,setProducts] = useState([]);
    
    useEffect(()=> {
        getProducts().then(res => {
            setProducts(res);
        });
    },[]);
    const onAdd = (count) => {
        addCart(count); 
    }

    const onDelete = ()=> {
        deleteProduct();
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 my-5 py-5">
                    <h2>{titulo}</h2>
                    <p>{greeting}</p>
                    <ItemCount stock={5} initial={1} onDelete={onDelete} onAdd={onAdd} />
                    {
                        products.length > 0 ?
                        <ItemList products={products}/> :
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    }
                  
                    
                </div>
            </div>

        </div>
    )
}

export default ItemListContainer;