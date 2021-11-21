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
text-align: center;
`

const Text = styled.p`

span{
    font-weight: 600;
}
`

const Footer = () => {
    return (
        <Cont>
            <Text>Copyright &copy; <span>nomnom.ltd</span> 2021 <br/>
                 All Rights Reserved</Text>
        </Cont>
    )
}

export default Footer
