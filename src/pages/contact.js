import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>Contact me on <Link to="https://twitter.com/devSourov2">Tweeter!</Link></p>
    </Layout>
  )
}

export default ContactPage;