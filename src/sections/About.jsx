import React from 'react'
import styled from 'styled-components'
import { centerIt, columnIt, sectionIt, mainColor, buttonIt } from '../globalStyles'

const Container = styled.div`
${sectionIt};
${centerIt};
`
const Image = styled.img`
position: absolute;
top:0;
left: 0;
object-fit: cover;
height: 100%;
width: 80%;
clip-path: polygon(0% 0%, 84% 0%, 46% 100%, 0% 100%);
`

const Line1 = styled.div`
position: absolute;
top:0;
left: 0;
height: 100%;
width: 80%;
background:white;
z-index: 1;
clip-path: polygon(63% 0%, 64% 0%, 26% 100%, 25% 100%);
`
const Line2 = styled.div`
position: absolute;
top:0;
left: 0;
height: 100%;
width: 80%;
background:white;
z-index: 1;
clip-path: polygon(43% 0%, 44% 0%, 6% 100%, 5% 100%);
`

const EmptyContainer = styled.div`
flex: 1;
`

const TextContainer = styled.div`
flex: 1;
${centerIt};
`

const TextWrapper = styled.div`
height: 80%;
width: 75%;
${columnIt};
align-items: center;
`

const SubTitle = styled.h2`
font-size: 35px;
font-weight: 400;
margin-bottom: 10px;
letter-spacing: 2px;
color: ${mainColor};
`

const Title = styled.h1`
font-size: 70px;
margin-bottom: 30px;
`

const Desc = styled.p`
text-align: center;
font-size: 20px;
line-height: 40px;
margin-bottom: 20px;
`
const Button = styled.button`
${buttonIt};
background-color: black;
`

const About = () => {
    return (
        <Container>
            <Image src="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="image of the city" />
            <Line1></Line1>
            <Line2></Line2>
            <EmptyContainer></EmptyContainer>
            <TextContainer>
                <TextWrapper>
                    <SubTitle>#projecttracks</SubTitle>
                    <Title>About Us</Title>
                    <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut iste aspernatur saepe rem, rerum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta oribus quaerat corrupti. perspiciatis iure magni minima ad, similique, architecto repudiandae modi quos sapiente assumenda consectetur nesciunt. Ipsum, impedit.</Desc>
                    <Button>Join our club</Button>
                </TextWrapper>
            </TextContainer>
        </Container>
    )
}

export default About
