import React from 'react'
import { graphql } from "gatsby"
import BannerImageFluid from "../components/BannerFluid"
import  indexStyles from "../pages/index.module.css"
import Layout from '../components/Layout'




const index = ({ data }) => {
  return (
    
    <Layout>
      
   
      <h1>Takayama recycle</h1>
       <BannerImageFluid fluid={data.file.childImageSharp.fluid} alt="Nature" />
       <p className= { "natureTitle" }>Welcome to {data.site.siteMetadata.title}!✨</p>
       <div className= {indexStyles.cardContainer}>
<div className= { indexStyles.postCard }>card 1</div>
<div className= { indexStyles.postCard }>card 2</div>
<div className= { indexStyles.postCard }>card 3</div>
<div className= { indexStyles.postCard }>card 4</div>
<div className= { indexStyles.postCard }>card 5</div>
<div className= { indexStyles.postCard }>card 6</div>
       </div>
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
