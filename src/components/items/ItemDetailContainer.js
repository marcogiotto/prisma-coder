import { useEffect,useState } from "react";
import ItemDetail from './ItemDetail/ItemDetail';
import Loader from "../UI/Loader/Loader";


const itemDetails = [
    {
        id: 6,
        name: 'Remera Negra',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
        stock: 5,
        imgUrl: '1m.png',
        price: 1700
    }
];

const getItem = () => {
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            resolve(itemDetails);
        },2000);
    });
}

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);

    useEffect(()=> {
        let data = getItem();
        data.then(result => {
            setItem(result);
        });
    },[]);

    return (
        <section className="container">
                {
                        item.length > 0 ?
                        item.map((res)=> <ItemDetail item={res} key={res.name}/>) :
                        <Loader/>
                }
        </section>
    )
};

export default ItemDetailContainer;