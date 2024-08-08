import Card from "../components/Card"

const Favorites = ( { items, onAddToFavorite } ) => {
    return (
        <div className="content">
            <div style={{display: 'flex', alignItems: 'center', marginBottom:'40px', justifyContent: 'space-between'}}>
                <h1>Мои закладки</h1>
            </div>

            <div>
                {items
                    .map((item, id) =>
                    <Card
                        key={id}
                        name={item.name}
                        price={item.price}
                        imageUrl={item.imageUrl}
                        favorited={true}
                        onAddToFavorite={onAddToFavorite}
                    />)}
                </div>
        </div>
    );
};

export default Favorites;