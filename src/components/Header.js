const Header = () =>  {
    return(
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
    )
}

export default Header;