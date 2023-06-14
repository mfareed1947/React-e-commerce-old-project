import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from './Navbar';


const Header = () => {
  return <MainHeader>
    <NavLink>
      <p>Jungle Store</p>
    </NavLink>
<Navbar/>
  </MainHeader>;
}

const MainHeader = styled.header`
padding: 0 4.8rem;
height: 6rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

p{
    font-size: 2.5rem;
}

`

export default Header
