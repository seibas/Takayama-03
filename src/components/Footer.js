import React from 'react'
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby"


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

const data = useStaticQuery(
    graphql`

query {
  site {
    siteMetadata {
      title
       description
    }
  }
}
`
)
    return (
        <FooterRaper>
            <p>This is the Footer</p>
            <h2 className={ 'title' }> {data.site.siteMetadata.title}</h2>
            <h2 className={ 'description' }> {data.site.siteMetadata.description}</h2>
        </FooterRaper>
      
    )
}

export default Footer
