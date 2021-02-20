  
import React from "react"
import Header from '../components/Header'
import { Link } from "gatsby"
import Footer from "../components/Footer"
import "../styles/style.css"





const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
     <Header />
     
      <nav style={{ marginBottom: `1.5rem` }}> 
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>TAKAYAMA Logo.</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
          <ListLink to="/thingtodo/">Todo</ListLink>
          <ListLink to="/blog/">Blog</ListLink>
        </ul>
      </nav>
      {children}
      <Footer />
    </div>
  )
}