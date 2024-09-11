import React from 'react'
import { NavLink } from 'react-router-dom'
// import './NavBar.css'
export default function NavBar() {
  return <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand text-white" href="/">logo</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item nav-link">
            <NavLink to="/home">Home </NavLink>
          </li>
          <li className="nav-item nav-link">
            <NavLink to="/aboutus">AboutUs </NavLink>
          </li>
          
          <li className="nav-item nav-link">
            <NavLink to="/contact">ContactUs </NavLink>
          </li>
          <li className="nav-item nav-link">
            <NavLink to="/product">Productlist </NavLink>
          </li>
          {/* <li className="nav-item nav-link">
            <NavLink to="/CartList">CartList </NavLink>
          </li> */}
          <li className="nav-item nav-link">
            <NavLink to="/signup">Signup </NavLink>
          </li>
          <li className="nav-item nav-link">
            <NavLink to="/notfound"> </NavLink>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

}
