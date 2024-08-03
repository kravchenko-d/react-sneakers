const Card = () => {
    return (
    <div className="card">

        <div className="favorite" style={{position: 'absolute', cursor: 'pointer'}}>
            <img src="/img/heart-unliked.svg" alt="Unliked" />
        </div>
    
        <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers"/>
    
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
    
        <div>
            <div>
                <span>Цена: </span>
                <b>12 999 руб.</b>
            </div>
            
            <button>
                <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
            </button>
        </div>
    
    </div>
    )
}

export default Card;