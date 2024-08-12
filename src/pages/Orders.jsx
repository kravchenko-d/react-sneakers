import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        (async () => {
            try {
                const { data } = await axios.get('https://66b232d61ca8ad33d4f6ec4b.mockapi.io/orders');
                setOrders(data);
                setIsLoading(false);
            } catch (error) {
                alert('Ошибка загрузки заказов с сервера');
                console.log('Ошибка загрузки заказов с сервера');
            }            
        })();
    }, []);
    return (
        <div className="content">
            <div style={{display: 'flex', alignItems: 'center', marginBottom:'40px', justifyContent: 'space-between'}}>
                <h1>Мои заказы</h1>
            </div>

            <div style={{display: 'flex', flexDirection: 'column'}}>
                {orders.map((item, index) =>
                    <div key={index} style={{marginBottom: '80px'}}>
                        <h2>Заказ № {item.id}</h2>
                        <div style={{display: 'flex'}}>
                            {item.items.map((item, index) => (
                                <Card
                                    key={index}
                                    {...item}
                                    loading={isLoading}
                                />
                            ))}
                        </div>
                    </div>                    
                    )}               
            </div>
        </div>
    );
};

export default Orders;