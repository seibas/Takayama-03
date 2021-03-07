import React from 'react'
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby"
import footerStyles from "../components/footer.module.css"


const FooterRaper = styled.div`
display: flex;
border-bottom: solid 2px #edf100;
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
        <FooterRaper className={ footerStyles.footerContainer }>
            <p>This is the Footer</p>
            <h2 className={ footerStyles.titleFooter }> {data.site.siteMetadata.title}</h2>
            <h2 className={ 'description' }> {data.site.siteMetadata.description}</h2>
        </FooterRaper>
      
    )
}

export default Footer
