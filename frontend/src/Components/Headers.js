import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/logo.png";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import SecondHeader from "./SecondHeader";
import Carousel from "./Carousel";
import Card from "./Card";
import CardData from "./CardData";



function Headers() {
  return (
    <>
    <nav className='navbar header-one navbar-expand-lg'>
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='/'>
          <img src={logo} />
        </NavLink>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a
                className='nav-link active'
                aria-current='page'
                href='#'
                style={{ color: "gray" }}
              >
                Deliver to
                <div style={{ color: "white", fontWeight: "800" }}>
                  {" "}
                  Pakistan
                </div>
              </a>
            </li>
          </ul>
          <form className='d-flex'>
            <input
              className='type me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-warning' type='submit'>
              <SearchIcon />
            </button>
          </form>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
                style={{ marginTop: "16px"}}
              >
                Language
              </a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <a className='dropdown-item' href='#'>
                    English
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    اُردُو
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Spanish{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
                style={{ fontWeight: "800" }}
              >
                <div style={{ fontWeight: "100", marginTop: "7px"}}>Hello, Sign in</div>Account
                & Lists
              </a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <NavLink to='/Signin'>
                  <button style={{ backgroundColor: "	#f0ad4e", marginLeft: "30px" }}
                  >
                
                  Sign in
                  </button>
                </NavLink>
                <li>
                  <a className='dropdown-item' href='#'>
                    New customer?
                  </a>
                </li>
                <li>
                  <NavLink
                    className='dropdown-item'
                    to='/Signup'
                    style={{ color: "blue" }}
                  >
                    Start Here
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#' style={{ marginTop: "7px" }}>
                Returns <div style={{ fontWeight: "700" }}> & Orders</div>
              </a>
            </li>
          </ul>
          <AddShoppingCartIcon
            className='icon'
            style={{ color: "white" }}
            fontSize='large'
          />
        </div>
      </div>
    </nav>


{/* SHeader, Carousel, Cards */}

    <SecondHeader />
    <Carousel />
    {CardData.map((val) => {
        return (
          <Card
            key={val.id}
            title={val.title}
            imgsrc={val.imgsrc}
            links={val.links}
          />
        );
      })}

</>
  );
}
// http://pngimg.com/uploads/amazon/amazon_PNG25.png

export default Headers;
