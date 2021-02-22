import React from "react"
import Header from "../components/Header"
import { Link } from "gatsby"
import Footer from "../components/Footer"
import "../styles/style.css"
import styled from "styled-components"
import navStyles from "../components/nav.module.css"

const LogoImage = styled.img`
  max-width: 40px;
  margin-top: 20px;
  border-radius: 10px;
`

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div className={navStyles.mainContainer}>
      <div className={navStyles.articleContainer}>
        <Header />

        <nav style={{ marginBottom: `1.5rem` }}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <LogoImage src={"moustache.png"} alt="logo" />
          </Link>
          <ul
            className={navStyles.navContainer}
            style={{ listStyle: `none`, float: `right` }}
          >
            <ListLink className={navStyles.navText} to="/">
              Home
            </ListLink>
            <ListLink className={navStyles.navLink} to="/about/">
              About
            </ListLink>
            <ListLink className={navStyles.navLink} to="/contact/">
              Contact
            </ListLink>
            <ListLink className={navStyles.navLink} to="/thingtodo/">
              Todo
            </ListLink>
            <ListLink className={navStyles.navLink} to="/blog/">
              Blog
            </ListLink>
          </ul>
        </nav>

        {children}
      </div>
      <Footer />
    </div>
  )
}
