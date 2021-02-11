import React from 'react'
import styled from "styled-components"
import Layout from '../components/Layout'
import nature from "../images/nature.jpg"


const NatureImage = styled.img`
display:grid;
margin-left:auto;
margin-right:auto;
max-width: 400px;
    margin-top: 20px;
    border-radius: 10px;
    background-color: rgb(255, 156, 64);
    padding: 0.21rem;


`


const index = () => {
  return (
    
    <Layout>
      
   
      <h1 style={{ display: `block`, fontSize: `3rem` }}>Takayama recycle</h1>
      <span class="change">H</span>
      <span class="change">o</span>
      <span class="change">m</span>
      <span class="change">e</span>  
       <NatureImage src={"nature2.jpg"} alt="Nature" />
   </Layout>
  )
}

export default index
