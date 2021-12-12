import React from 'react'
import styled from 'styled-components'
import { centerIt, columnIt, mainColor, sectionIt } from '../globalStyles'

const Container = styled.div`
${sectionIt};
${centerIt};
`
const ImageTop = styled.img`
position: absolute;
top:0;
left: 0;
object-fit: cover;
height: 100%;
width: 80%;
clip-path: polygon(10% 0%, 80% 0%, 60% 64%);
`


const ImageBottom = styled.img`
position: absolute;
top:0;
left: 0;
object-fit: cover;
height: 100%;
width: 80%;
clip-path: polygon(0% 0%, 6% 0%, 84% 100%, 0% 100%);
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


const History = () => {
    return (
        <Container>
            <ImageTop src="https://images.pexels.com/photos/2682462/pexels-photo-2682462.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="people in nature"/>
            <ImageBottom src="https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="a person in nature"/>
            <EmptyContainer></EmptyContainer>
            <TextContainer>
                <TextWrapper>
                    <Title>History</Title>
                    <SubTitle>#learnfromyourpast</SubTitle>
                    <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut iste aspernatur saepe rem, rerum. architecto repudiandae modi quos sapiente assumenda consectetur nesciunt. Ipsum, impedit.</Desc>
                    <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. tur saepe rem, rerum. architecto repudiandae modi quos sapiente assumenda consectetur nesciunt. Ipsum, impedit.</Desc>
                </TextWrapper>
            </TextContainer>
        </Container>
    )
}

export default History
