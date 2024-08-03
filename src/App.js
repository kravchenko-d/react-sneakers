import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />


      <Header />
      <div className="content">
        <div style={{display: 'flex', alignItems: 'center', marginBottom:'40px', justifyContent: 'space-between'}}>
          <h1>Все кроссовки</h1>
          <div className="search-block" style={{display: 'flex', borderRadius: '10px'}}>
            <img src="/img/search.svg" alt="Search" style={{padding: '0 15px'}} />
            <input placeholder="Поиск..." style={{border: '0', padding: '12px', fontSize: '16px', width: '200px'}}/>
          </div>
        </div>

        <div>
          <Card />
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
