import './headerStyle.css'

const Header= ()=>{
    return(
        <header id="Header">
        <img src="/img/logo (1).png" alt="" />
        <nav>
            <ul id="navbar">
                <li>Home</li>
                <li>Shop</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        </header>
    );
}

export default Header ;