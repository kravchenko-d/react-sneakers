import { useState, useContext } from 'react';
import styles from './Card.module.scss'
import ContentLoader from 'react-content-loader';
import { AppContext } from '../../App';

const Card = ({ id,
                name,
                imageUrl,
                price,
                onFavorite,
                onPlus,
                favorited = false,
                loading = false
            }) => {
    const { isItemAdded } = useContext(AppContext);
    const [isFavorite, setIsFavorite] = useState(favorited);

    const onClickPlus = () => {
        onPlus({ id, name, imageUrl, price });
    };

    const onClickFavorite = () => {
        onFavorite({ id, name, imageUrl, price });
        setIsFavorite(!isFavorite);
    };

    return (
    <div className={styles.card}>
        {
            loading ? <ContentLoader 
            speed={2}
            width={155}
            height={265}
            viewBox="0 0 155 265"
            backgroundColor="#cdd0d6"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="10" ry="10" width="155" height="90" /> 
            <rect x="0" y="100" rx="8" ry="8" width="155" height="15" /> 
            <rect x="0" y="125" rx="8" ry="8" width="100" height="15" /> 
            <rect x="0" y="153" rx="10" ry="10" width="80" height="25" /> 
            <rect x="124" y="146" rx="10" ry="10" width="32" height="32" />
        </ContentLoader> : <>
        <div className={styles.favorite} style={{position: 'absolute', cursor: 'pointer'}} onClick={onClickFavorite}>
            <img src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="Unliked" />
        </div>
    
        <img width={133} height={112} src={imageUrl} alt="Sneakers"/>
    
        <h5>{name}</h5>
    
        <div>
            <div>
                <span>Цена: </span>
                <b>{price} руб.</b>
            </div>

            <img onClick={onClickPlus} src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/plus.svg"} alt="Plus" style={{cursor: 'pointer'}}/>
        </div>
        </>
        }    
    </div>
    );
}

export default Card;