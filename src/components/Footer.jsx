import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
background-color: #291901;
color: white;
height: 300px;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
`

const Wrapper = styled.div`
width: 50%;
height: 50%;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
margin-top:100px;
`

const Text = styled.p`
font-weight: 400;
letter-spacing: 1px;
span{
    font-weight: 600;
}
`

const Footer = () => {
    return (
        <Cont>
            <Wrapper>
            <Text>Copyright &copy; <span>nomnom.ltd</span> 2021 <br/>
                 All Rights Reserved</Text>
            </Wrapper>
            
        </Cont>
    )
}

export default Footer
