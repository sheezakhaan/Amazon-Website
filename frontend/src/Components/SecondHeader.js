import React from 'react';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';

function SecondHeader() {
    return (
        <>
       <nav className="navbar header-two navbar-expand-lg">
  <div className="container-fluid"  style={{color: "white"}}>
  <FormatAlignJustifyIcon/> All
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Today's Deals</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Customer Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Gift Cards</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Registry</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sell</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

      </>
    )
}

export default SecondHeader
