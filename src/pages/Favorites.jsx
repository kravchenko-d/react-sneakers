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
                        key={item.id}
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