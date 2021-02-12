import React from 'react'
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import Layout from '../components/Layout'


const NatureImage = styled(Image)`
display:grid;
margin-left:auto;
margin-right:auto;
max-width: 400px;
    margin-top: 20px;
    border-radius: 10px;
    background-color: rgb(255, 156, 64);
 


`


const index = ({ data }) => {
  return (
    
    <Layout>
      
   
      <h1 style={{ display: `block`, fontSize: `3rem` }}>Takayama recycle</h1>
      <span class="change">H</span>
      <span class="change">o</span>
      <span class="change">m</span>
      <span class="change">e</span>  
       <NatureImage fluid={data.file.childImageSharp.fluid} alt="Nature" />
       <p className= { "natureTitle" }>Welcome to {data.site.siteMetadata.title}!</p>
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
    file(relativePath: { eq: "images/nature.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`



export default index
