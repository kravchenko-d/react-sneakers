import { useEffect, useState } from 'react';
import styles from './Card.module.scss'

const Card = ({ onClickFavorite, name, imageUrl, price, onPlus }) => {

    const [isAdded, setIsAdded] = useState(false);

    const onClickPlus = () => {
        onPlus({ name, imageUrl, price });
        setIsAdded(!isAdded);
    };

    return (
    <div className={styles.card}>

        <div className={styles.favorite} style={{position: 'absolute', cursor: 'pointer'}} onClick={onClickFavorite}>
            <img src="/img/heart-unliked.svg" alt="Unliked" />
        </div>
    
        <img width={133} height={112} src={imageUrl} alt="Sneakers"/>
    
        <h5>{name}</h5>
    
        <div>
            <div>
                <span>Цена: </span>
                <b>{price} руб.</b>
            </div>

            {/* <button> */}
                <img onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/plus.svg"} alt="Plus"/>
            {/* </button> */}
        </div>
    
    </div>
    );
}

export default Card;