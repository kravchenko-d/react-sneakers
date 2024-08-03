function App() {
  return (
    <div className="wrapper clear">
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


      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt="Logo"/>
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul>
          <li>
            <img width={18} height={18} src="/img/cart.svg" alt="Cart" style={{marginRight:'20px'}}/>
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="User"/>
          </li>
        </ul>
      </header>
      <div className="content">
        <div style={{display: 'flex', alignItems: 'center', marginBottom:'40px', justifyContent: 'space-between'}}>
          <h1>Все кроссовки</h1>
          <div className="search-block" style={{display: 'flex', borderRadius: '10px'}}>
            <img src="/img/search.svg" alt="Search" style={{padding: '0 15px'}} />
            <input placeholder="Поиск..." style={{border: '0', padding: '12px', fontSize: '16px', width: '200px'}}/>
          </div>
        </div>

        <div>
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
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers"/>
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
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
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div>
              <div>
                <span>Цена: </span>
                <b>8 499 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers"/>
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div>
              <div>
                <span>Цена: </span>
                <b>8 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
