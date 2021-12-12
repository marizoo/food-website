import React from 'react'
import styled from 'styled-components'
import {centerIt, mainColor} from '../globalStyles'

const Container = styled.div`
height: 70px;
width: 100vw;
background-color: #c9ebeb;
${centerIt};
position: fixed;
top: 0;
z-index: 10;
border-bottom: 1px solid rgba(92, 235, 223, 0.1);
`
const Left = styled.div`
flex: 1;`

const Logo = styled.h1`
margin-left: 50px;
color: ${mainColor};
font-size: 35px;
letter-spacing: 3px;
`

const Right = styled.div`
flex: 3;
display: flex;
justify-content: end;
`

const Ul = styled.ul`
list-style: none;
display: flex;
align-items: center;
margin-right: 50px;

`

const Li = styled.li`
margin-right: 50px;
font-size: 18px;
color: #35615a;
font-weight: 600px;
letter-spacing: 1px;
cursor: pointer;
`

const Navbar = () => {
    return (
        <Container>
            <Left>
                <Logo>Trovel.</Logo>
            </Left>
            <Right>
                <Ul>
                    <Li>Home</Li>
                    <Li>History</Li>
                    <Li>About</Li>
                    <Li>Services</Li>
                    <Li>Where</Li>
                    <Li>Contact</Li>
                </Ul>
            </Right>
        </Container>
    )
}

export default Navbar
