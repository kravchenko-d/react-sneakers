import { useContext } from "react";
import { AppContext } from "../App";

const Info = ({ title, image, description }) => {
    const { setCartOpened } = useContext(AppContext);

    return (
        <div className="cartEmpty" style={{flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}} >
            <img
                width={120}
                height={120}
                src={image}
                alt="Empty cart"
                style={{marginBottom: '20px'}}
            />
            <h2>{title}</h2>
            <p style={{opacity: '0.6'}}>{description}</p>
            <button onClick={() => setCartOpened(false)} className="greenButton">
                <img src="/img/arrow.svg" alt="Arrow" />
                Вернуться назад
            </button>
        </div>
    )
}

export default Info;