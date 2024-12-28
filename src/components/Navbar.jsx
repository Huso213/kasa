import React from "react";
import "../components/Navbar.css"

function Navbar() {
  return (
  //react on utilise claseName
  <nav className="navbar">
    <div className="logo"> 
    <img src="/public/logo.png" alt="logo" />
    </div>
    <div>Accueil</div>
    <div>A Propos</div>
    
  </nav>
  )
}

export default Navbar;