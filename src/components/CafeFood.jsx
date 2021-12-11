import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
height: 100vh;
width: 100vw;
position: relative;
`

const Image = styled.div`
position: absolute;
top: 100px;
left: 250px;
z-index: 1;
    img{
        width: 500px;
        height: 500px;
        object-fit: cover;

    }
`

const Background = styled.div`
position: absolute;
top: 30px;
right:400px;
width: 460px;
height: 700px;
background: #ffc219;
`


const Text = styled.div`
width: 350px;
position: absolute;
top: 100px;
right: 400px;
`

const Title = styled.span`
font-size: 70px;
font-family: 'BenchNine', sans-serif;
line-height: 4.5rem;

    span{
        font-weight: 700;
        font-size: 70px;
        font-family: 'BenchNine', sans-serif;
    }
`

const Desc = styled.p`
font-size: 1.2rem;
margin-top: 20px;
width: 500px;
`



const CafeFood = () => {
    return (
        <Cont>
            <Image>
                <img src="https://images.pexels.com/photos/3763426/pexels-photo-3763426.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
            </Image>
            
            <Background></Background>
            <Text>
                <Title>CAFE <br/>
                    <span>FOOD MENU</span>
                </Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore accusamus eaque rerum distinctio maiores aliquam omnis ab odio quos, modi laborum. Consectetur quisquam adipisci ut sed provident, in reiciendis minima odit aperiam repudiandae totam ad, voluptatem sunt est.</Desc>
            </Text>
        </Cont>
    )
}

export default CafeFood
