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
right: 0;
object-fit: cover;
height: 100%;
width: 100%;
clip-path: polygon(100% 0%, 48% 0%, 72% 100%, 100% 100%);

`

const Line1 = styled.div`
position: absolute;
top:0;
right: 0;
height: 100%;
width: 100%;
background-color: white;
clip-path: polygon(63% 0%, 62% 0%, 87% 90%, 88% 90%);
z-index: 1;
`

const Line2 = styled.div`
position: absolute;
top:0;
right: 0;
height: 100%;
width: 100%;
background-color: white;
clip-path: polygon(80% 15%, 81% 15%, 94% 60%, 93% 60%);
z-index: 1;`

const Decoration1 = styled.div`
position: absolute;
top:0;
right: 0;
object-fit: cover;
height: 100%;
width: 100%;
background-color: ${mainColor};
opacity: 0.8;

clip-path: polygon(58% 50%, 50% 50%, 62% 100%, 70% 100%);
`

const Decoration2 = styled.div`
position: absolute;
top:0;
right: 0;
object-fit: cover;
height: 100%;
width: 100%;
background-color: ${mainColor};
opacity: 0.6;
clip-path: polygon(52% 65%, 44% 65%, 52% 100%, 60% 100%);
`

const Decoration3 = styled.div`
position: absolute;
top:0;
right: 0;
object-fit: cover;
height: 100%;
width: 100%;
background-color: ${mainColor};
opacity: 0.4;
clip-path: polygon(45.5% 80%, 38% 80%, 42.5% 100%, 50% 100%);
`

const Decoration4 = styled.div`
position: absolute;
top:0;
right: 0;
object-fit: cover;
height: 100%;
width: 100%;
background-color: ${mainColor};
opacity: 0.2;
clip-path: polygon(38.5% 92%, 32% 92%, 33.6% 100%, 40.3% 100%);

`

const EmptyContainer = styled.div`
flex: 1;
`

const TextContainer = styled.div`
flex: 1;
${centerIt};
height: 100%;
width: 100%;
`

const TextWrapper = styled.div`
height: 80%;
width: 75%;
${columnIt};
align-items: center;
`
const Title = styled.h1`
font-size: 70px;
`

const SubTitle = styled.h2`
cursor: pointer;
font-size: 30px;
font-weight: 400;
margin-bottom: 35px;
letter-spacing: 2px;
color: ${mainColor};
`


const SubTitle1 = styled.p`
text-align: center;
font-size: 24px;
line-height: 40px;
margin-bottom: 20px;
text-align: start;
margin-bottom: 50px;
font-weight: 500;
`

const Desc = styled.p`
text-align: center;
font-size: 20px;
line-height: 40px;
margin-bottom: 20px;
text-align: start;
`



const Where = () => {
    return (
        <Container>
        <Image src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="people in nature"/>
        <Line1></Line1>
        <Line2></Line2>
        <Decoration1></Decoration1>
        <Decoration2></Decoration2>
        <Decoration3></Decoration3>
        <Decoration4></Decoration4>
        <TextContainer>
            <TextWrapper>
                <Title>Where are you</Title>
                <SubTitle>#tellmebabe</SubTitle>
                <SubTitle1>Lpsum dolor sit, amet consectetur adipisicing elit. Aut iste aspernatur saepe rem, rerum.</SubTitle1>
                <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut iste aspernatur saepe rem, rerum. Lorem dolor sit amet consectetur adipisicing elit. Provident, culpa! consectetur nesciunt. Ipsum, impedit.</Desc>
            </TextWrapper>
        </TextContainer>
        <EmptyContainer></EmptyContainer>
    </Container>
    )
}

export default Where
