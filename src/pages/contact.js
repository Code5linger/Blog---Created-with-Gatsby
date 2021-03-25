import React from "react"
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

const ContactPage = () => {
  return (
    <div>
      <Header />
      
      <h1>Contact</h1>
      <p>Contact me on <Link to="https://twitter.com/devSourov2">Tweeter!</Link></p>

      <Footer />
    </div>
  )
}

export default ContactPage;