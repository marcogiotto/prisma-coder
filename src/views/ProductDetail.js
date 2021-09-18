import { useParams } from "react-router";
import ItemDetailContainer from "../components/Items/ItemDetailContainer";

const ProductDetail = () => {

    const {id} = useParams(); 

    return (
        <ItemDetailContainer productId={id}/>
    )
};

export default ProductDetail;