import React from 'react';
import { NavLink } from "react-router-dom";
import CNT from 'img/CNT.svg';
import Image from 'components/image';

const Header=(props)=>{
     return (
       <>       
        <nav className="headerNav">
        <Image url={CNT} />
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink> 
        <NavLink activeClassName="active" to="/contact">
          Contact us
        </NavLink>        
      </nav>
      </>
    )
}

export default Header;