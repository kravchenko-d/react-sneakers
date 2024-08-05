import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/img/sneakers/1.jpg'},
  {name: 'Мужские Кроссовки Nike Air Max 270', price: 15499, imageUrl: '/img/sneakers/2.jpg'},
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: '/img/sneakers/3.jpg'},
  {name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl: '/img/sneakers/4.jpg'},
];

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
          {arr.map(obj => <Card 
            name={obj.name}
            price={obj.price}
            imageUrl={obj.imageUrl}
          />)}
        </div>
      </div>
    </div>
  );
}

export default App;
