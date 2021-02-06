import React from 'react';

const Navbar = () => {
    return (
        <div>
            
  <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo"> RAHIM's SHOP</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="signin">SIGN IN</a></li>
        <li><a href="register">REGISTER</a></li>
        <li><a href="logout">LOG OUT</a></li>
      </ul>
    </div>
  </nav>
        
            
        </div>
    );
}

export default Navbar;