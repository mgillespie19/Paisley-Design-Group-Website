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
          We are a group of highly skilled mobile contractors and design
          consultants with a passion for building game-changing products in our
          DNA.
        </p>
        <p>
          We have worked on a number of
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
