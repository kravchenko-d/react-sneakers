const Drawer = ({ onClose, onRemove, items = [] }) => {
    return (
        <div className="overlay">
            <aside style={{padding: '30px', display: 'flex', flexDirection: 'column'}}>
                <h2 style={{margin: '0', display: 'flex', justifyContent: 'space-between'}}>Корзина
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Close" onClick={onClose} style={{cursor: 'pointer'}}/>
                </h2>

                {
                    items.length > 0 ? (
                    <>
                        <div className="items" style={{flex: '1', overflow: 'auto'}}>
                        {items.map((obj) => (
                            <div className="cartItem" style={{display: 'flex', alignItems: 'center', fontSize: '16px', padding: '20px'}}>
                                <div className="cartItemImg">
                                    <img width={70} height={70} src={obj.imageUrl} alt="Sneakers" style={{marginRight: '20px'}} />
                                </div>
                                <div style={{marginRight: '20px'}}>
                                    <p style={{margin: '0'}}>{obj.name}</p>
                                    <b style={{fontSize: '14px'}}>{obj.price} руб.</b>
                                </div>
                                <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                        </div>
                        ))}
                        </div>
                        <div className="cartTotalBlock">
                            <ul style={{marginBottom: '40px'}}>
                            <li>
                                <span>Итого:</span>
                                <div style={{flex: '1', height: '1px', borderBottom: '1px dashed #dfdfdf'}}></div>
                                <b>{items.reduce((acc, item) => acc + item.price, 0)} руб.</b>
                            </li>
                            <li>
                                <span>Налог 20%</span>
                                <div></div>
                                <b>{Math.round(items.reduce((acc, item) => acc + item.price*0.2, 0)*100)/100} руб.</b>
                            </li>
                            </ul>
                            <button className="greenButton">Оформить заказ
                            <img src="/img/arrow.svg" alt="Arrow"/>
                            </button>                        
                        </div>
                    </>
                    ) : <div className="cartEmpty" style={{flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}} >
                        <img width={120} height={120} src="/img/empty-cart.jpg" alt="Empty cart" style={{marginBottom: '20px'}} />
                        <h2>Корзина пуста</h2>
                        <p style={{opacity: '0.6'}}>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                        <button onClick={onClose} className="greenButton">
                            <img src="/img/arrow.svg" alt="Arrow" />
                            Вернуться назад
                        </button>
                    </div>
                }

            </aside>
      </div>
    )
}

export default Drawer;