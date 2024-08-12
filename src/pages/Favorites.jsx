import Card from "../components/Card";
import { AppContext } from "../App";
import { useContext } from "react";

const Favorites = ( { onAddToFavorite, onAddToCart } ) => {
    const state = useContext(AppContext);
    return (
        <div className="content">
            <div style={{display: 'flex', alignItems: 'center', marginBottom:'40px', justifyContent: 'space-between'}}>
                <h1>Мои закладки</h1>
            </div>

            <div>
                {state.favorites.map((item, index) =>
                    <Card
                        key={item.id} // когда вместо item.id стоял index, то при удалении одного из нескольких товаров в избранном пропадало сердечко на следующем от удаленного
                        favorited={true}
                        onFavorite={onAddToFavorite}
                        onPlus={onAddToCart}
                        {...item}
                    />)}
                </div>
        </div>
    );
};

export default Favorites;