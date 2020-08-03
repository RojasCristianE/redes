import React from 'react'
import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'

const SocialLinks = class extends React.Component {
  render() {
    return (
      <div className="social has-text-centered">
        <a title="facebook" href="https://www.facebook.com/redesciencia">
          <img
            src={facebook}
            alt="Facebook"
            style={{ width: '1em', height: '1em' }}
          />
        </a>
        <a title="twitter" href="https://twitter.com/redesciencia">
          <img
            className="fas fa-lg"
            src={twitter}
            alt="Twitter"
            style={{ width: '1em', height: '1em' }}
          />
        </a>
        <a title="instagram" href="https://www.instagram.com/redesciencia">
          <img
            src={instagram}
            alt="Instagram"
            style={{ width: '1em', height: '1em' }}
          />
        </a>
      </div>
    )
  }
}

export default SocialLinks
