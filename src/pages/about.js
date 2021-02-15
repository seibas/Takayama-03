import React from 'react'
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from '../components/Layout';
import styled from "styled-components"



const LaptopImage = styled(Image)`
display:grid;
margin-left:auto;
margin-right:auto;
max-width: 400px;
    margin-top: 20px;
    border-radius: 10px;
    background-color: rgb(255, 156, 64);
 




`


const about = ({ data }) => {
    return (
     
        <Layout>
            <h1>I am about page</h1>
            <LaptopImage fixed={data.file.childImageSharp.fixed} alt="laptop" />
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
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default about
