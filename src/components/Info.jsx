import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
height: 360px;
width: 100vw;
display: flex;
padding: 50px;
`;

const Left = styled.div`
flex: 1;
display: flex;
margin-left: 50px;
`
const Right = styled.div`
flex: 1;
display: flex;
`

const ImgCont = styled.div`
margin-right: 50px;

    img{
        height: 250px;
width: 250px;
object-fit: cover;
    }
`

const TextCont = styled.div`
width: 250px;

span{
    font-size: 50px;
    font-family: 'BenchNine', sans-serif;
    line-height: 3rem;

}
p {
    font-size: 18px;
    margin-top: 20px;
}
`


const Info = () => {
    return (
        <Cont>
            <Left>
                <ImgCont>
                <img src="https://images.pexels.com/photos/7493244/pexels-photo-7493244.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                </ImgCont>
                <TextCont>
                    <span>HAVE A HEALTHY AFTERNOON SNACK</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facilis eos unde?</p>
                </TextCont>
            </Left>

            <Right>
            <ImgCont>
                <img src="https://images.pexels.com/photos/3743537/pexels-photo-3743537.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                </ImgCont>
                <TextCont>
                        <span>INCLUDE LOTS OF FIBRE IN YOUR DIET</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quod libero neque est veritatis iste.</p>
                </TextCont>
            </Right>
        </Cont>
    )
}

export default Info
