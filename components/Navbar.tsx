import React from 'react';
import Link from 'next/link'
import styled from 'styled-components';

const Navbar = () => {
    return (
        <Nav>
            <NavLogo>
                Develops Today
            </NavLogo>

            <NavList>
                <NavListItem>
                    <Link href="/posts/new">Add new post</Link>
                </NavListItem>
                <NavListItem>
                    <Link href="/">List posts</Link>
                </NavListItem>
            </NavList>
        </Nav>
    )
}

export default Navbar;

const Nav = styled.nav`
  background-color: #333333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
`;

const NavLogo = styled.div`

`;

const NavList = styled.ul`
    list-style: none;
    margin-bottom: 0;
    display: flex;
`;

const NavListItem = styled.li`
    margin-right: 10px;
    cursor: pointer;
`;