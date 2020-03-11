import React from 'react'
import Link from 'gatsby-link'
import '../layouts/index.css'
import '../layouts/styles.css'

import ExampleSquare from '../components/exampleSquare'

import pdgLogo from '../assets/pdg logo 2.png'

const IndexPage = () => (
  <div className="Page">
    <div className="Landing">
      <div className="LandingTitle">
        <h1>
          Paisley
        </h1>
        <h1>
          Design Group
        </h1>
      </div>

      <img className="companyLogo" src={pdgLogo} />
    </div>

    <div className="BottomHalf">
      <div className="QuickPreambleBody">
        <h2>
          Who are we?
        </h2>
        <p>
          this is a collection of my work -- some of the things I'm passionate about,
          proud to have worked on, or am otherwise excited to share.
        </p>
        <p>
          if you like what you see, and are interested in working together on a project,
          check out <Link to="/portfolio"> <b> contact </b> </Link> in my about section,
          or head over to <Link to="/"> <b> my contracting company </b> </Link>
        </p>
      </div>
    </div>

    <div className="Footer">
      <p> © 2020 MYEHR LLC dba. Paisley Design Group </p>
      <p> 6105 Delmar Blvd </p>
      <p> St. Louis, MO 63112</p>
      <p> inquiries: max@maxgillespie.com </p>
    </div>
  </div>
)

export default IndexPage
