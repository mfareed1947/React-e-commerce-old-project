import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FiShoppingCart } from 'react-icons/fi'
import { CgMenu, CgClose } from 'react-icons/cg'

const Navbar = () => {
    return <Nav>
        <div className='navbar' >
            <ul className='navbar-lists' >
                <li>
                    <NavLink to={"/"} className="navbar-link">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/about"} className="navbar-link">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/products"} className="navbar-link">
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/contact"} className="navbar-link">
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/cart"} className="navbar-link cart-trolley--link">
                        <FiShoppingCart className='cart-trolley' />
                        <span className='cart-total--item'>
                            10
                        </span>
                    </NavLink>
                </li>
            </ul>
            <div className='mobile-navbar-btn'>
                <CgMenu className="mobile-nav-icon" />
                <CgClose className="mobile-nav-icon close-outline" />
            </div>
        </div>
    </Nav>

}

const Nav = styled.nav`
.navbar-lists{
    
display: flex;
align-items: center;
gap: 4.8rem;

}
.navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.6rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }

      .cart-trolley {
        position: relative;
        font-size: 2.2rem;
      }

      .cart-trolley--link {
      position: relative;
      }

      .cart-total--item {
        width: 1.8rem;
        height: 1.8rem;
        position: absolute;
        /* background-color: #000; */
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.helper};
      }

      .mobile-navbar-btn{
        display: none;
      }

`

export default Navbar
