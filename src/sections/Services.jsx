import React from 'react'
import styled from 'styled-components'
import { buttonIt, centerIt, columnIt, mainColor, sectionIt } from '../globalStyles'

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
clip-path: polygon(0% 0%, 46% 0%, 60% 100%, 0% 100%);
`

const Line = styled.div`
position: absolute;
top:0;
left: 0;
height: 100%;
width: 80%;
background-color: white;
clip-path: polygon(25% 0%, 26% 0%, 41% 100%, 40% 100%);
z-index: 1;
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
const Title = styled.h1`
font-size: 70px;
margin-bottom: 5px;
`

const SubTitle = styled.h2`
cursor: pointer;
font-size: 30px;
font-weight: 400;
margin-bottom: 30px;
letter-spacing: 2px;
color: ${mainColor};
`



const Desc = styled.p`
text-align: center;
font-size: 20px;
line-height: 40px;
margin-bottom: 20px;
`
const Button = styled.button`
${buttonIt};
background-color: ${mainColor};
`


const Services = () => {
    return (
    <Container>
        <Image src="https://images.pexels.com/photos/2033981/pexels-photo-2033981.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="people in nature"/>
        <Line></Line>
        <EmptyContainer></EmptyContainer>
        <TextContainer>
            <TextWrapper>
                <Title>Services</Title>
                <SubTitle>#outofthebeatentracks</SubTitle>
                <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut iste aspernatur saepe rem, rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, reiciendis!architecto repudiandae modi quos sapiente assumenda Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, culpa! consectetur nesciunt. Ipsum, impedit.</Desc>
            <Button>Contact us now</Button>
            </TextWrapper>
        </TextContainer>
    </Container>
    )
}

export default Services
