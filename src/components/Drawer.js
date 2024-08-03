const Drawer = () => {
    return (
        <div style={{display: 'none'}} className="overlay">
            <aside style={{padding: '30px', display: 'flex', flexDirection: 'column'}}>
                <h2 style={{margin: '0', display: 'flex', justifyContent: 'space-between'}}>Корзина
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" style={{cursor: 'pointer'}}/>
                </h2>

                <div className="items" style={{flex: '1', overflow: 'auto'}}>

                    <div className="cartItem" style={{display: 'flex', alignItems: 'center', fontSize: '16px', padding: '20px'}}>
                    <div className="cartItemImg">
                        <img width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers" style={{marginRight: '20px'}} />
                    </div>
                    <div style={{marginRight: '20px'}}>
                        <p style={{margin: '0'}}>Мужские Кроссовки Nike Air Max 270</p>
                        <b style={{fontSize: '14px'}}>12 999 руб.</b>
                    </div>
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                    </div>

                    <div className="cartItem" style={{display: 'flex', alignItems: 'center', fontSize: '16px', padding: '20px'}}>
                    <div className="cartItemImg">
                        <img width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers" style={{marginRight: '20px'}} />
                    </div>           
                    <div style={{marginRight: '20px'}}>
                        <p style={{margin: '0'}}>Мужские Кроссовки Nike Air Max 270</p>
                        <b style={{fontSize: '14px'}}>12 999 руб.</b>
                    </div>              
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                    </div>
                    
                </div>
                <div className="cartTotalBlock">
                    <ul style={{marginBottom: '40px'}}>
                    <li>
                        <span>Итого:</span>
                        <div style={{flex: '1', height: '1px', borderBottom: '1px dashed #dfdfdf'}}></div>
                        <b>20 000 руб.</b>
                    </li>
                    <li>
                        <span>Налог 20%</span>
                        <div></div>
                        <b>4 000 руб.</b>
                    </li>
                    </ul>
                    <button className="greenButton">Оформить заказ
                    <img src="/img/arrow.svg" alt="Arrow"/>
                    </button>                        
                </div>
            </aside>
      </div>
    )
}

export default Drawer;