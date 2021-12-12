import React from 'react'
import styled from 'styled-components'
import { centerIt, columnIt, mainColor, sectionIt } from '../globalStyles'

const Container = styled.div`
${sectionIt};
${centerIt};
`
const ImageLeft = styled.img`
position: absolute;
top:0;
right: 0;
object-fit: cover;
height: 100%;
width: 100%;
clip-path: polygon(75% 0%, 45% 100%, 0% 100%, 0% 100%, 65% 0%);
`


const ImageRight = styled.img`
position: absolute;
top:0;
right: 0;
object-fit: cover;
height: 100%;
width: 80%;
clip-path: polygon(55% 100%, 10% 0%, 33% 0%, 100% 50%, 100% 100%);
`

const EmptyContainer = styled.div`
flex: 1;
`

const TextContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;
height: 80%;
width: 80%;
`

const TextWrapper = styled.div`
margin-left: 80px;
height: 80%;
width: 60%;
${columnIt};
align-items: flex-start;
`
const Title = styled.h1`
font-size: 70px;
margin-bottom: 5px;
`

const SubTitle = styled.h2`
font-size: 30px;
font-weight: 400;
letter-spacing: 2px;
color: ${mainColor};
margin-top: 50px;
`



const Desc = styled.p`
text-align: start;
width: 65%;
font-size: 20px;
line-height: 40px;
margin-bottom: 20px;
`


const MainPage = () => {
    return (
        <Container>
            <ImageLeft src="https://images.pexels.com/photos/268908/pexels-photo-268908.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="people in nature"/>
            <ImageRight src="https://images.pexels.com/photos/9951818/pexels-photo-9951818.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="a person in nature"/>
            <TextContainer>
                <TextWrapper>
                    <SubTitle>#hellobabes</SubTitle>
                    <Title>Welcome</Title>
                    <Desc>Ladipisicing elit. Aut iste aspernatur saepe rem, rerum. architecto repudiandae modi quos sapiente assumenda consectetur nesciunt. </Desc>
                </TextWrapper>
            </TextContainer>
            <EmptyContainer></EmptyContainer>
        </Container>
    )
}

export default MainPage
