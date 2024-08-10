import { useContext } from "react";
import Card from "../components/Card"
import { AppContext } from "../App";

const Favorites = ( { onAddToFavorite } ) => {
    const state = useContext(AppContext);

    return (
        <div className="content">
            <div style={{display: 'flex', alignItems: 'center', marginBottom:'40px', justifyContent: 'space-between'}}>
                <h1>Мои закладки</h1>
            </div>

            <div>
                {state.favorites.map((item, index) =>
                    <Card
                        key={index}
                        favorited={true}
                        onFavorite={onAddToFavorite}
                        {...item}
                    />)}
                </div>
        </div>
    );
};

export default Favorites;