import styles from './Card.module.scss'

const Card = (props) => {

    const onClickButton = () => {
        alert(props.name)
    }

    return (
    <div className={styles.card}>

        <div className={styles.favorite} style={{position: 'absolute', cursor: 'pointer'}}>
            <img src="/img/heart-unliked.svg" alt="Unliked" />
        </div>
    
        <img width={133} height={112} src={props.imageUrl} alt="Sneakers"/>
    
        <h5>{props.name}</h5>
    
        <div>
            <div>
                <span>Цена: </span>
                <b>{props.price} руб.</b>
            </div>

            <button onClick={onClickButton}>
                <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
            </button>
        </div>
    
    </div>
    );
}

export default Card;