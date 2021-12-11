import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
height: 100vh;
width: 100vw;
position: relative;
overflow: hidden;
`

const HeroImg = styled.img`
width: 100%;
`
const Navbar = styled.div`
height: 50px;
width: 100%;
color: white;
position: absolute;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: space-between;
`

const Logo = styled.span`
font-size: 60px;
margin-left: 50px;
margin-top: 50px;
font-weight: 600;
opacity: .85;
`

const NavLink = styled.span`
font-size: 20px;
margin-right: 60px;
`

const Hero = () => {
    return (
        <Cont>
            <HeroImg src="https://images.pexels.com/photos/10213680/pexels-photo-10213680.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260s"/>
            <Navbar>
                <Logo>Nomnom</Logo>
                <NavLink>Home</NavLink>
            </Navbar>
            
        </Cont>
    )
}

export default Hero
