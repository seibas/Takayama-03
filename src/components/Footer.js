import React from 'react'
import styled from "styled-components";




const FooterRaper = styled.div`
background-color: black;

bottom: 0;
 min-height: 21vh;
text-align:center;
 display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
 

`

const Footer = () => {
    return (
        <FooterRaper>
            <h3>This is the Footer</h3>
        </FooterRaper>
      
    )
}

export default Footer
