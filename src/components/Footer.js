import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import SocialLinks from '../components/SocialLinks'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
      </footer>
    )
  }
}

export default Footer
