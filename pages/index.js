import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import '../css/main.scss'

export default class Sass extends React.Component {
  render () {
    return (
      <div>
        <DocumentTitle title={ 'Johnm - Designer, Thinker, Maker.' }></DocumentTitle>
        <div className="container grey-95 padding-b-5 sm-padding-b-20">
          <h1>I use colours, letters and pictures to help people understand things. </h1> 
          <p className="italic serif"> 
            Don't hesitate to 
            <Link className="italic margin-l-1" to={prefixLink('contact/')}>Get in touch </Link>
          </p>
        </div>
        <div className="row sm-row padding-t-2">
          <div className="column sm-column-40 sm-padding-r-6">
            <p className="medium grey-95"> Things I've Made </p>

            <a className="medium external-link" href="http://noat.me" target="_blank">Noat</a>
            <p className="small"> A barebones note taking / to-do list app.</p>

            <a className="medium" href={prefixLink('readdit')}>Readdit</a>
            <p className="small"> Playing with Reddit's json api.</p>

            <Link className="medium" to={prefixLink('project/hamburgler/')}>Hamburgler</Link>
            <p className="small">A simple easy to implement hamburger menu.</p>

            <a className="medium external-link" target="blank" href="http://instagram.com/crandberry.co">Crandberry Co</a>
            <p className="small">A social media project about hand lettering and typography.</p>
          </div>

          <div className="column sm-column-40 sm-padding-r-6 padding-t-5 sm-padding-t-0">
            <p className="medium grey-95"> Things I've Written </p>
            <Link className="medium" to={prefixLink('blog/vmin-and-vmax-in-ie/')}>Using vmin and vmax in ie9+</Link>
            <p className="small">Javascript - Sep 9</p>

            <Link className="medium" to={prefixLink('blog/im-kind-of-sorry/')}>I'm kind of sorry.</Link>
            <p className="small">User Experience - Sep 8</p>

            <Link className="medium" to={prefixLink('blog/responsive-grids-with-nth-child/')}>Responsive grids with nth-child</Link>
            <p className="small">CSS - Apr 9</p>

            <Link className="medium" to={prefixLink('blog/css-generators/')}>Some handy CSS generators</Link>
            <p className="small">CSS - Mar 22</p>
          </div>

          <div className="column padding-t-6 padding-b-6 sm-padding-t-0 sm-right">
            <p className="margin-b-1 medium external-link"><a target="_blank" href="http://dribbble.com/johnm__/">Dribbble</a></p>
            <p className="margin-b-1 medium external-link"><a target="_blank" href="http://instagram.com/johnm__/">Instagram</a></p>
            <p className="margin-b-1 medium external-link"><a target="_blank" href="http://twitter.com/johnm__/">Twitter</a></p>
            <p className="margin-b-1 medium external-link"><a target="_blank" href="http://github.com/johnpmorris">Github</a></p>
            <p className="margin-b-1 medium external-link"><a target="_blank" href="http://codepen.io/Johnm__/">Codepen</a></p>
            <p className="margin-b-1 medium external-link"><a target="_blank" href="http://www.linkedin.com/in/johnphilipmorris">Email spam</a></p>
          </div>
        </div>
      </div>
    )
  }
}

