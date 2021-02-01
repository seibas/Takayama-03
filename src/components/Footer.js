import React from 'react'
import styled from "styled-components";




const FooterRaper = styled.div`
background-color: black;
position:absolute;
bottom: 0;
padding:20px;
 min-height: 21vh;
text-align:center;
 display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
left:0;
        width: 100%;
 

`

const Footer = () => {
    return (
        <FooterRaper>
            <p>This is the Footer</p>
        </FooterRaper>
      
    )
}

export default Footer
