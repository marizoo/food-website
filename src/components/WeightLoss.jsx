import { EmojiFoodBeverageSharp, EmojiFoodBeverageTwoTone, Fastfood } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
width: 100vw;
height: 350px;
display: flex;
`

const Left = styled.div`
flex: 3;
display: flex;
flex-direction: column;
padding: 50px 0 50px 50px;
text-align: right;

`

const LeftTitle = styled.p`
font-size: 70px;
font-family: 'BenchNine', sans-serif;
font-weight: 300;
line-height: 4.5rem;
margin-right: 60px;

span{
    font-weight: 700;
    font-size: 70px;
font-family: 'BenchNine', sans-serif;
}
`

const LeftDesc = styled.p`
font-size: 1.2rem;
width: 80%;
text-align: center;
margin-top: 20px;
margin-left: 40px;
`

const ReadMore = styled.button`
border: none;
border-bottom: 2px solid black;
padding: 5px;
width: 18%;
background: none;
font-weight: 600;
font-size: 15px;
margin-top: 20px;
margin-left: 15px;

cursor: pointer;
`

const Right = styled.div`
flex: 6;
display: flex;
margin-top: 40px;
color: #535353;

`

const Right1 = styled.div`
flex: 1;
`
const Right2 = styled.div`
flex: 1;

`
const Right3 = styled.div`
flex: 1;

`
const RightTitle = styled.div`
font-family: 'BenchNine', sans-serif; 
font-size: 35px;
width: 80%;
`

const RightIcon = styled.p`
font-size: 40px;
`

const RightDesc = styled.p`
width: 65%;
font-size: 18px;
`


const WeightLoss = () => {
    return (
        <Cont>
            <Left>
                <LeftTitle>WEIGHT LOSS LINKED TO <span>HEALTHY EATING</span></LeftTitle>
                <LeftDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi temporibus iure rem molestias facilis nobis labore eveniet laudantium.</LeftDesc>
                <ReadMore>read more.</ReadMore>
            </Left>
            
            
            <Right>
                <Right1>
                    <RightIcon>
                        <Fastfood style={{fontSize:"inherit"}}/>
                    </RightIcon>
                    <RightTitle>OVER 300 <br/>FOOD PRODUCTS</RightTitle>
                    <RightDesc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio tenetur repellat id ad unde?</RightDesc>

                </Right1>

                <Right2>
                    <RightIcon>
                        <EmojiFoodBeverageTwoTone style={{fontSize:"inherit"}}/>
                    </RightIcon>
                    <RightTitle>ONLY NATURAL <br/> PRODUCTS</RightTitle>
                    <RightDesc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio tenetur repellat id ad unde?</RightDesc>
                </Right2>
                <Right3>
                    <RightIcon>
                        <EmojiFoodBeverageSharp style={{fontSize:"inherit"}}/>
                    </RightIcon>
                    <RightTitle>SIGNIFICANT <br/> WEIGHT LOSS</RightTitle>
                    <RightDesc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio tenetur repellat id ad unde?</RightDesc>
                </Right3>
            </Right>
        </Cont>
    )
}

export default WeightLoss
