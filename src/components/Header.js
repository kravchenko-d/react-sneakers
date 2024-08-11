import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const Header = ({ onClickCart, cartItems }) =>  {
    const { totalPrice } = useCart();
    return(
        <header>
        <Link to="/">
            <div className="headerLeft">
                
                    <img width={40} height={40} src="/img/logo.png" alt="Logo"/>

                    <div className="headerInfo">
                        <h3>React Sneakers</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
            </div>
        </Link>
            <ul>

                <li onClick={onClickCart} style={{cursor: 'pointer'}}>
                    <img width={18} height={18} src="/img/cart.svg" alt="Корзина" style={{marginRight:'20px'}} />
                    <span>{totalPrice} руб.</span>
                </li>
                <li style={{cursor: 'pointer'}}>
                    <Link to="/favorites">
                        <img width={18} height={18} src="/img/heart.svg" alt="Закладки" style={{marginRight:'20px'}} />
                    </Link>                    
                </li>
                <li>
                    <img width={18} height={18} src="/img/user.svg" alt="Пользователь" />
                </li>

            </ul>

        </header>
    )
}

export default Header;