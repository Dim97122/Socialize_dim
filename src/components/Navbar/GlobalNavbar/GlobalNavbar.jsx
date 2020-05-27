import React from 'react';
import { Link } from 'react-router-dom';
import * as API from '../../../services/api';



const GlobalNavbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-around">
        <Link to="/">
          <div className="navbar-brand">LOGO</div>
        </Link>
        <div className="navbar-nav">
          <Link to="/register">
            <div className="nav-item nav-link">Inscription </div>
          </Link>
          <Link to="/signin">
            <div className="nav-item nav-link">Connexion </div>
          </Link>
          <div className="nav-item nav-link" onClick={()=> API.Logout()}>Déconnexion</div>
          <Link to="/profile">
            <div className="nav-item nav-link">Profil</div>
          </Link>
        </div>
      </nav>
    </>
  );
}
export default GlobalNavbar;
