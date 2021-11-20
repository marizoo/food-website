import React from 'react'
import styled from 'styled-components'

const ContTop = styled.div`
width: 100vw;
height: 200px;
position: relative;
padding: 40px;
`
const TitleMain = styled.div`
font-size: 40px;
letter-spacing:-1.5px;
width: 500px;

    span{
        font-weight: 700;
    }
`

const DescTop = styled.p`
position: absolute;
width: 500px;
bottom: 0;
right: 150px;
`

const ContBottom = styled.div`
height: 600px;
position: relative;
`

const ContBreakfast = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
width: 400px;
position: absolute;
top: 100px;
left: 100px;
text-align: end;

`

const TitlePage = styled.span`
font-size: 40px;
margin-bottom: 20px;
`
const DescMid = styled.p`
`

const Backdrop = styled.div`
background-color: yellow;
height: 500px;
width: 280px;
position: absolute;
bottom: 45px;
right: 100px;
`

const Images = styled.div`
height: 400px;
width: 460px;
display: flex;
justify-content: space-between;
position: absolute;
bottom: 120px;
right: 70px;
`
const Img1 = styled.img`
width: 60%;
height: 60%;
object-fit: cover;
align-self: flex-end;
margin-right: 20px;

`
const Img2 = styled.img`
width: 70%;
object-fit: cover;

`

const FoodInfos = styled.ul`

list-style: none;
position: absolute;
left:90px;
bottom: 170px;
font-weight: 400;
cursor: pointer;
`

const FoodInfo = styled.li`
margin-bottom: 8px;
`


const Breakfast = () => {
    return (
        <>
            <ContTop>
                
                <TitleMain>BECAUSE SO MUCH IS RIDING ON <span>YOUR DESIGN</span></TitleMain>
                <DescTop>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere architecto dolor pariatur reiciendis in necessitatibus quasi. Lorem ipsum dolor.</DescTop>
            </ContTop>
            <ContBottom>
                <ContBreakfast>
                    <TitlePage>BREAKFAST</TitlePage>
                    <DescMid>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet voluptatibus provident aut ea facilis repellendus? Odio quis laborum quisquam maxime!
                    </DescMid>
                </ContBreakfast>
                <Backdrop></Backdrop>
                <Images>
                    <Img1 src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                    <Img2 src="https://images.pexels.com/photos/3993720/pexels-photo-3993720.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                    
                </Images>
                <FoodInfos>
                    <FoodInfo>RECIPES</FoodInfo>
                    <FoodInfo>DIABETIC</FoodInfo>
                    <FoodInfo>VEGAN RECIPES</FoodInfo>
                    <FoodInfo>LOW CALORIE</FoodInfo>
                </FoodInfos>
            </ContBottom>

        </>
    )
}

export default Breakfast
