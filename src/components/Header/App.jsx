import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logoSemFundo.png';

function Header() {
  return (
    <header>
        <div className='bodyHeader'>
      <div className="parte1">
        <Link id='link' to="/">Principal</Link>
        <Link id='link' to="/contato">Contato</Link>
      </div>
      <div className="parte2">
        <img className='logoHeader' src={Logo}/>
      </div>
    </div>
    </header>
  );
}

export default Header;
