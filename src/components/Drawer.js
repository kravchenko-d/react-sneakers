import { useContext, useState } from 'react';
import Info from '../components/Info';
import { AppContext } from '../App';
import axios from 'axios';
import { useCart } from '../hooks/useCart';

const Drawer = ({ onClose, onRemove, items = [] }) => {
    const { cartItems, setCartItems, totalPrice } = useCart();
    const [orderId, setOrderId] = useState(null);
    const [isOrderComplete, setIsOrderComplete] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const {data} = await axios.post('https://66b232d61ca8ad33d4f6ec4b.mockapi.io/orders', {items: cartItems});        
            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartItems([]);
        } catch (error) {
            alert("Не удалось создать заказ");
        };
        setIsLoading(false);
    };

    return (
        <div className="overlay">
            <aside style={{padding: '30px', display: 'flex', flexDirection: 'column'}}>
                <h2 style={{margin: '0', display: 'flex', justifyContent: 'space-between'}}>Корзина
                    <img className="removeBtn" src={process.env.PUBLIC_URL + "/img/btn-remove.svg"} alt="Close" onClick={onClose} style={{cursor: 'pointer'}}/>
                </h2>

                {
                    items.length > 0 ? (
                    <>
                        <div className="items" style={{flex: '1', overflow: 'auto'}}>
                        {items.map((obj) => (
                            <div key={obj.id} className="cartItem" style={{display: 'flex', alignItems: 'center', fontSize: '16px', padding: '20px'}}>
                                <div className="cartItemImg">
                                    <img width={70} height={70} src={process.env.PUBLIC_URL + obj.imageUrl} alt="Sneakers" style={{marginRight: '20px'}} />
                                </div>
                                <div style={{marginRight: '20px'}}>
                                    <p style={{margin: '0'}}>{obj.name}</p>
                                    <b style={{fontSize: '14px'}}>{obj.price} руб.</b>
                                </div>
                                <img onClick={() => onRemove(obj)} className="removeBtn" src={process.env.PUBLIC_URL + "/img/btn-remove.svg"} alt="Remove"/>
                        </div>
                        ))}
                        </div>
                        <div className="cartTotalBlock">
                            <ul style={{marginBottom: '40px'}}>
                            <li>
                                <span>Итого:</span>
                                <div style={{flex: '1', height: '1px', borderBottom: '1px dashed #dfdfdf'}}></div>
                                <b>{totalPrice} руб.</b>
                            </li>
                            <li>
                                <span>Налог 20%</span>
                                <div></div>
                                <b>{Math.round(totalPrice*0.2*100)/100} руб.</b>
                            </li>
                            </ul>
                            <button onClick={onClickOrder} className="greenButton">Оформить заказ
                            <img src={process.env.PUBLIC_URL + "/img/arrow.svg"} alt="Arrow"/>
                            </button>
                        </div>
                    </>
                    ) : <Info
                            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пуста"}
                            description={isOrderComplete ? `Ваш заказ № ${orderId} скоро будет передан курьерской службе` : "Добавьте хотя бы одну пару кроссовок, чтобы оформить заказ."}
                            image={isOrderComplete ? process.env.PUBLIC_URL + "/img/complete-order.jpg" : process.env.PUBLIC_URL + "/img/empty-cart.jpg"}
                        />
                }

            </aside>
        </div>
    );
};

export default Drawer;