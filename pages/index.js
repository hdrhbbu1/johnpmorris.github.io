import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import sortBy from 'lodash/sortBy'
import access from 'safe-access'
import moment from 'moment'
import '../css/main.scss'
import social from '../consts/social.js'

export default class Sass extends React.Component {
  render () {
    const socialLinks = []
    const socialPrint =
      social.forEach((social) => {
        socialLinks.push(
          <p key={social.link} className="margin-b-1 medium external-link">
            <a target="_blank" href={social.link}>
              {social.name}
            </a>
          </p>
        )  
      })

    const pageLinks = []
    const sortedPages = sortBy(this.props.route.pages, (page) =>
      access(page, 'data.date')
    ).reverse()
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && access(page, 'file.dir') === 'blog') {
        const title        = access(page, 'data.title'),
              category     = access(page, 'data.category'),
              date         = access(page, 'data.date'),
              dateReadible = moment(date, "YYYY-MM-DD").format("LL")
        pageLinks.push(
          <p key={title} >
            <Link className="medium" to={prefixLink(page.path)}>
              {title}
            </Link>
            <span className="small block">{category} - {dateReadible}</span>
          </p>
        )
      }
    })
    return (
      <div>
        <DocumentTitle title={ 'Johnm - Designer, Thinker, Maker.' }></DocumentTitle>

        <div className="container grey-95 padding-b-5 sm-padding-b-20">
          <h1>I use colours, letters and pictures to help people understand things. </h1> 
          <p className="italic serif"> 
            Don't hesitate to 
            <Link className="italic margin-l-1" to={prefixLink('contact/')}>
              Get in touch 
            </Link>
          </p>
        </div>

        <div className="row sm-row padding-t-2">
          <div className="column sm-column-40 sm-padding-r-6">
            <p className="medium grey-95"> Things I've Made </p>

            <a className="medium external-link" href="http://noat.me" target="_blank">Noat</a>
            <p className="small"> A barebones note taking / to-do list app.</p>
            
            <a className="medium external-link" href="https://www.npmjs.com/package/hyperterm-darkwater" target="_blank">Hyperterm-darkwater</a>
            <p className="small">A dark, flat, pastel theme for hyperterm</p>

            <a className="medium" href={prefixLink('readdit')}>Readdit</a>
            <p className="small"> Playing with Reddit's json api.</p>

            <Link className="medium" to={prefixLink('project/hamburgler/')}>Hamburgler</Link>
            <p className="small">A simple easy to implement hamburger menu.</p>

            <a className="medium external-link" target="blank" href="http://instagram.com/crandberry.co">Crandberry Co</a>
            <p className="small">A social media project about hand lettering and typography.</p>
          </div>

          <div className="column sm-column-40 sm-padding-r-6 padding-t-5 sm-padding-t-0">
            <p className="medium grey-95"> 
              Things I've written 
            </p>
            {pageLinks}
          </div>

          <div className="column padding-t-6 padding-b-6 sm-padding-t-0 sm-right">
            {socialLinks}
          </div>

        </div>
      </div>
    )
  }
}
