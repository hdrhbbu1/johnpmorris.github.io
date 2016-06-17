import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
    <div>
      <div className="absolute t0 l0 padding-l-2 padding-t-1 grow">
        <Link className="medium grey-95 no-border" to="/">
          <div className="asset-logo-black padding-4"> </div>
        </Link>
      </div>
      <div className="padding-t-10 sm-padding-t-20"></div>
      <div className="white-bg container wide-container padding-2 sm-padding-6 sm-padding-t-10">
         {this.props.children}
       </div>
       <footer>
         <div className="container wide-container sm-padding-t-13 sm-padding-6 sm-padding-b-10 padding-2 grey-50 small medium">
           &copy; John Morris 
         </div>
       </footer>
      </div>
    )
  },
})
