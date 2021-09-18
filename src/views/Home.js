
import ItemListContainer from '../components/Items/ItemListContainer';

const Home = () => {

    return (
        <>
            <ItemListContainer titulo="Prisma shop" greeting="Encontrá gran variedad de productos." addCart={()=> {}} deleteProduct={() => {}}></ItemListContainer>   
        </>
    )
        
};

export default Home;