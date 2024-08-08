import Card from "../components/Card";
import { CgClose } from "react-icons/cg";

const Home = ({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart
}) => {
    return (
        <div className="content">
            <div style={{display: 'flex', alignItems: 'center', marginBottom:'40px', justifyContent: 'space-between'}}>
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"} </h1>
                <div className="search-block" style={{display: 'flex', borderRadius: '10px', position: 'relative'}}>
                    <img src="/img/search.svg" alt="Search" style={{padding: '0 15px'}} />            
                    {searchValue && <CgClose onClick={() => setSearchValue('')} style={{cursor: 'pointer', position: 'absolute', right: '12px', top: '13px', color: 'gray'}} />}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." style={{border: '0', padding: '12px', fontSize: '16px', width: '200px'}}/>
                </div>
            </div>

            <div>
                {items
                .filter(item => item.name.toLowerCase().includes(searchValue))
                .map((item, id) =>
                <Card
                    key={id}
                    // name={item.name}
                    // price={item.price}
                    // imageUrl={item.imageUrl}
                    onFavorite={(obj) => onAddToFavorite(obj)}
                    onPlus={(obj) => onAddToCart(obj)}
                    {...item}
                />)}
            </div>
        </div>
    );
};

export default Home;