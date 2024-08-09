import { useState } from 'react';
import styles from './Card.module.scss'

const Card = ({ id, name, imageUrl, price, onFavorite, onPlus, favorited = false, added = false }) => {

    const [isAdded, setIsAdded] = useState(added);
    const [isFavorite, setIsFavorite] = useState(favorited);

    const onClickPlus = () => {
        onPlus({ id, name, imageUrl, price });
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        onFavorite({ id, name, imageUrl, price });
        setIsFavorite(!isFavorite);
    };

    return (
    <div className={styles.card}>

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

            {/* <button> */}
                <img onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/plus.svg"} alt="Plus" style={{cursor: 'pointer'}}/>
            {/* </button> */}
        </div>
    
    </div>
    );
}

export default Card;