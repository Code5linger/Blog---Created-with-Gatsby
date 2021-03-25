import React from "react"
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

const AboutPage = () => {
  return (
    <div>
      <Header />
      
      <h1>About</h1>
      <h3>Bio Lorem ipsum, dolor sit amet</h3>
      <p>
        <Link to="/contact">Contact Me</Link>
      </p>

      <Footer />
    </div>
  )
}

export default AboutPage;