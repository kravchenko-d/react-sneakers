import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

// const arr = [
//   {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/img/sneakers/1.jpg'},
//   {name: 'Мужские Кроссовки Nike Air Max 270', price: 15499, imageUrl: '/img/sneakers/2.jpg'},
//   {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: '/img/sneakers/3.jpg'},
//   {name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl: '/img/sneakers/4.jpg'},
//   {name: 'Мужские Кроссовки Under Armour Curry 8', price: 15199, imageUrl: '/img/sneakers/5.jpg'},
//   {name: 'Мужские Кроссовки Nike Kyrie 7', price: 11299, imageUrl: '/img/sneakers/6.jpg'},
//   {name: 'Мужские Кроссовки Jordan Air Jordan 11', price: 10799, imageUrl: '/img/sneakers/7.jpg'},
//   {name: 'Мужские Кроссовки Nike LeBron XVIII', price: 16499, imageUrl: '/img/sneakers/8.jpg'},
//   {name: 'Мужские Кроссовки Nike Lebron XVIII Low', price: 13999, imageUrl: '/img/sneakers/9.jpg'},
//   {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: '/img/sneakers/10.jpg'},
//   {name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl: '/img/sneakers/1.jpg'},
//   {name: 'Мужские Кроссовки Nike Kyrie Flytrap IV', price: 11299, imageUrl: '/img/sneakers/6.jpg'},
// ];

export const AppContext = createContext({});

function App() {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  useEffect(() => {
    // fetch('https://66b232d61ca8ad33d4f6ec4b.mockapi.io/items').then(res => {
    //   return res.json();
    // }).then((json) => {
    //   setItems(json);
    // });
    async function fetchData() {
      const cartResponse = await axios.get('https://66b232d61ca8ad33d4f6ec4b.mockapi.io/cart');
      const itemsResponse = await axios.get('https://66b232d61ca8ad33d4f6ec4b.mockapi.io/items');

      setIsLoading(false);
      setCartItems(cartResponse.data);
      setItems(itemsResponse.data);
    }
    // axios.get('https://66b232d61ca8ad33d4f6ec4b.mockapi.io/items').then(res => {
    // setItems(res.data);
    // });
    // axios.get('https://66b232d61ca8ad33d4f6ec4b.mockapi.io/cart').then(res => {
    // setCartItems(res.data);
    // });
    fetchData();
  }, []);

  async function onAddToCart(obj) {
    const cartItem = cartItems.find((item) => Number(item.id) === Number(obj.id))
    if (cartItem) {
      axios.delete(`https://66b232d61ca8ad33d4f6ec4b.mockapi.io/cart/${cartItem.cart_id}`);
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
      console.log(cartItems)
    } else {
      await axios.post('https://66b232d61ca8ad33d4f6ec4b.mockapi.io/cart', obj);
      await axios.get('https://66b232d61ca8ad33d4f6ec4b.mockapi.io/cart').then(res => {
      setCartItems(res.data);
      });
      // setCartItems(prev => [...prev, obj]);
    }
  };

  const onAddToFavorite = (obj) => {
    setFavorites(prev => [...prev, obj]);
  };

  // const onRemoveItem = (id) => {
  //   axios.delete(`https://66b232d61ca8ad33d4f6ec4b.mockapi.io/cart/${id}`); //сюда должен попадать cart_id
  //   setCartItems(prev => prev.filter(item => item.id !== id));
  // }

  const onRemoveItem = (obj) => {
    const cartItem = cartItems.find((item) => Number(item.id) === Number(obj.id))
    axios.delete(`https://66b232d61ca8ad33d4f6ec4b.mockapi.io/cart/${cartItem.cart_id}`);
    setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
  }

  return (
    <AppContext.Provider value={{ cartItems, favorites, items }}>
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}

      <Header onClickCart={() => setCartOpened(true)} cartItems={cartItems} />
      
        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/favorites"
            element={<Favorites
              // items={favorites} не нужно, т.к. есть контекст
              onAddToFavorite={onAddToFavorite}
            />}
          />
        </Routes>

    </div>
    </AppContext.Provider>
  );
}

export default App;
