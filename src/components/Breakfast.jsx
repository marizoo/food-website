import React from 'react'
import styled from 'styled-components'

const ContTop = styled.div`
width: 100vw;
height: 200px;
position: relative;
padding: 40px;
`
const TitleMain = styled.div`
font-size: 70px;
width: 550px;
font-family: 'BenchNine', sans-serif;
font-weight: 300;
line-height: 4.5rem;


    span{
        font-weight: 700;
        font-family: 'BenchNine', sans-serif;

    }
`

const DescTop = styled.p`
position: absolute;
width: 500px;
bottom: 0;
right: 150px;
`

const ContBottom = styled.div`
height: 800px;
position: relative;

`

const ContBreakfast = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
width: 400px;
position: absolute;
top: 140px;
left: 150px;
text-align: end;
`

const TitlePage = styled.span`
font-size: 70px;
margin-bottom: 10px;
font-family: 'BenchNine', sans-serif;
`
const DescMid = styled.p`
`

const Backdrop = styled.div`
background-color: #ffc219;
height: 700px;
width: 600px;
position: absolute;
bottom: 45px;
right: 200px;
`

const Images = styled.div`
height: 550px;
width: 800px;
display: flex;
justify-content: space-between;
position: absolute;
bottom: 120px;
right: 150px;
`
const Img1 = styled.img`
width: 70%;
height: 70%;
object-fit: cover;
align-self: flex-end;
margin-right: 20px;

`
const Img2 = styled.img`
width: 80%;
object-fit: cover;

`

const FoodInfos = styled.ul`

list-style: none;
position: absolute;
left:150px;
bottom: 170px;
font-weight: 400;
cursor: pointer;
`

const FoodInfo = styled.li`
margin-bottom: 8px;
font-size: 1.2rem;
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
