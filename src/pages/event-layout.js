// src/pages/event-layout.js
import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"

export default ({ data: { mdx } }) => {
  return (
    <Layout>
      <h3>Name: {mdx.frontmatter.title}</h3>
      <h3>Date: {mdx.frontmatter.date}</h3>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query EventPageQuery($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
        title
      }
      id
    }
  }
`