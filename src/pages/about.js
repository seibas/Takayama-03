import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/Layout';
import BannerImageFluid from "../components/BannerFluid"




const about = ({ data }) => {
    return (
     
        <Layout>
          
            <h1>I am about page</h1>
            <BannerImageFluid fluid={data.file.childImageSharp.fluid} alt="laptop" />
       <p className= { "laptopTitle" }>Welcome to {data.site.siteMetadata.title}!</p>
        </Layout>
    )
}


export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "images/laptop.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default about
