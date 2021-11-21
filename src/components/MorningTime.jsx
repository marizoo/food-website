import { Facebook, FaceRounded, Instagram, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
position: relative;
width: 100vw;
height: 600px;
`

const Image = styled.div`

    img{
        width: 100%;
        height: 700px;
        object-fit: cover;
    }
`

const TextBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 600px;
position: absolute;
bottom: 0px;
right:31%;
z-index: 3;
`

const Title = styled.span`
    font-family: 'BenchNine', sans-serif;
    font-size: 50px;
    font-weight: 300;
    margin-top: 20px;
`


const Socials = styled.div`
display: flex;
width: 150px;
align-items: center;
justify-content: space-evenly;
`

const MorningTime = () => {
    return (
        <Cont>
            <Image>
                <img src="https://images.pexels.com/photos/3831823/pexels-photo-3831823.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            </Image>
            <TextBox>
                <Socials>
                    <Facebook/>
                    <Twitter/>
                    <Instagram/>
                </Socials>
                <Title>ENJOY MORNING TIME</Title>
            </TextBox>
        </Cont>
    )
}

export default MorningTime
