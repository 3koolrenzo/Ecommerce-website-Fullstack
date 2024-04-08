import React, { useState} from 'react'
import './Navbar.css'
import cart_icon from '../Assets/cart_icon.png'


const Navbar = () => {

    const [menu,setMenu] = useState("bracelets/anklets");

  return (
    <div className='navbar'>
        <div className='nav-logo'> 
            <img src='' alt='' /> 
            <p>Shopper</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("bracelets/anklets")}}>Bracelets/Anklets{menu==="bracelets/anklets"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("nose cuffs")}}>Nose Cuffs{menu==="nose cuffs"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("earrings")}}>Earrings{menu==="earrings"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("necklaces")}}>Necklaces{menu==="necklaces"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("crochet")}}>Crochet{menu==="crochet"?<hr/>:<></>}</li> 
            <li onClick={()=>{setMenu("rings")}}>Rings{menu==="rings"?<hr/>:<></>}</li> 
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt='' />
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar
