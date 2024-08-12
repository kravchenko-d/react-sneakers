import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const Header = ({ onClickCart, cartItems }) =>  {
    const { totalPrice } = useCart();
    return(
        <header>
        <Link to={process.env.PUBLIC_URL + '/'}>
            <div className="headerLeft">
                
                    <img width={40} height={40} src={process.env.PUBLIC_URL + "/img/logo.png"} alt="Logo" />

                    <div className="headerInfo">
                        <h3>React Sneakers</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
            </div>
        </Link>
            <ul>

                <li onClick={onClickCart} style={{cursor: 'pointer'}}>
                    <img width={18} height={18} src={process.env.PUBLIC_URL + "/img/cart.svg"} alt="Корзина" style={{marginRight:'20px'}} />
                    <span>{totalPrice} руб.</span>
                </li>
                <li style={{cursor: 'pointer'}}>
                    <Link to={process.env.PUBLIC_URL + '/favorites'}>
                        <img width={18} height={18} src={process.env.PUBLIC_URL + "/img/heart.svg"} alt="Закладки" />
                        <span style={{margin: '0 16px 0 8px'}}>Закладки</span>
                    </Link>                    
                </li>
                <li style={{cursor: 'pointer'}}>
                    <Link to={process.env.PUBLIC_URL + "/orders"}>
                        <img width={18} height={18} src={process.env.PUBLIC_URL + "/img/user.svg"} alt="Пользователь" />
                        <span style={{marginLeft: '8px'}}>Профиль</span>
                    </Link> 
                </li>

            </ul>

        </header>
    )
}

export default Header;