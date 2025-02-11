function Header(){
    return(
        <div className="heading">
            <div className="logo">
                <img src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png" height="60px" width="120px"></img>
            </div>
            <div className="list">
                <button className="but">Help</button>
                <button className="but">Offers</button>
                <button className="but">About</button>
            </div>
            <input className="searchbar" type="text" placeholder="Search here for more"></input>
            <div className="butt">
                <button className="pro">Sign In</button>
                <button className="pro">Add to Card</button>
            </div>
        </div>
    )
}

export default Header;