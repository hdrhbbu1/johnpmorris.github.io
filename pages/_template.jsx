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
      <div className="absolute t0 l0 border-box padding-l-2 padding-t-1 grow">
        <Link className="medium grey-95 no-border" to="/">
          <div className="asset-logo-black padding-4"/>
        </Link>
      </div>
      <div className="padding-t-5 sm-padding-t-5"></div>
      <div className="container wide-container padding-3 sm-padding-6 padding-t-10 sm-padding-t-12">
         {this.props.children}
       </div>
       <footer>
         <div className="container wide-container sm-padding-t-13 sm-padding-6 sm-padding-b-10 padding-4 grey-50 small medium">
           &copy; John Morris 
           <span className="block padding-t-3 sm-padding-t-0 sm-float-right grey-25">
             Made in&nbsp; 
             <a target="_blank" className="grey-25 external-link" href="https://facebook.github.io/react/">React</a>
             &nbsp;with&nbsp;
             <a target="_blank" className="grey-25 external-link" href="https://github.com/gatsbyjs/gatsby">Gatsby</a>
             &nbsp;-&nbsp;
             <a target="_blank" className="grey-50 external-link" href="https://github.com/johnpmorris/johnpmorris.github.io/tree/react-rebuild">
               View Source
             </a> 
          </span>
         </div>
       </footer>
      </div>
    )
  },
})
