import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'

export default class Sass extends React.Component {
  render () {
    return (
      <div>
        <DocumentTitle title={ 'Johnm - Curriculum Vitae - Designer, Thinker, Maker.' }></DocumentTitle>
        <div className="container wide-container grey-95 padding-b-5">
          <h1> Cirriculum Vitae </h1>
          <p className="margin-b-11">
            From conceptualising and fleshing out application workflows, <br/>
            to implementing and creating those ideas in whatever the trendy front-end stack of the day is. <br/><br/>
            Being involved in the whole process of creating something new, is something I really love doing.</p>
          <div className="row sm-row">
            <div className="column sm-column-50 sm-padding-r-6">
              <p className="medium border-bottom serif italic">Experience</p>
              <p className="grey-95">
                <span className="block margin-t-5 margin-b-1">Design lead / Front end</span>
                <span className="medium grey-50 italic serif">
                  Wireframes, HiFi Mockups, User testing, Using CSS to solve unique web to print design problems,
                  Creating landing pages, Front End (React).
                </span>
                <br/>
                <span className="medium small grey-50">Outfit - 2015 - current</span>

                <span className="block margin-t-4 margin-b-1">UI designer / Front end</span>
                <span className="medium grey-50 italic serif">
                  Wireframes, HiFi Mockups, Illustration, Front end (Rails).
                </span>
                <br/>
                <span className="medium small grey-50">NetEngine - 2015 - 2017</span>

                <span className="block margin-t-6 margin-b-1">Web design / Front end</span>
                <span className="medium grey-50 italic serif">
                  E-Commerce design, Front End, Branding.
                </span><br/>
                <span className="medium small grey-50">Mywork - 2014</span>

                <span className="block margin-t-6 margin-b-1">UX design intern</span>
                <span className="medium grey-50 italic serif">
                  Wireframes, UX Design, Illustration.
                </span><br/>
                <span className="medium small grey-50">MNET Mobile - 2014</span>

                <span className="block margin-t-6">Camera operator</span>
                <span className="medium small grey-50">M3 Media - 2013</span>

                <span className="block margin-t-6">Image manipulation</span>
                <span className="medium small grey-50">Brisbane Lions AFL Club - 2013</span>
              </p>
            </div>
            <div className="column padding-t-8 sm-padding-t-0 sm-column-50 md-column-50 sm-padding-r-6">
            <div className="padding-t-10 lg-padding-t-0">
              <p className="medium border-bottom serif italic">Strengths</p>
              <ul className="no-list-style">
                <li className="margin-b-1 padding-t-2">Solving problems</li>
                <li className="margin-b-1">CSS - sass, jss</li>
                <li className="margin-b-1">Wireframing / Hi-Fi</li>
                <li className="margin-b-1">JS - React, es2016</li>
                <li className="margin-b-1">Video Production</li>
              </ul>
            </div>
            <div className="margin-t-10">
              <p className="medium border-bottom serif italic">Education</p>
              <p className="grey-95">
                <span className="block margin-t-5">Diploma of Graphic Design</span>
                <span className="medium small grey-50">2012 - 2014</span>

                <span className="block margin-t-4">Certificate IV in IT</span>
                <span className="medium small grey-50">2011 - 2013</span>
              </p>
              </div>
            </div>
          </div>
          <p className="medium border-bottom padding-t-12 margin-b-0 serif italic medium">References</p>
          <div className="row sm-row">
            <div className="column lg-column-50 sm-padding-r-6">
              <span className="block medium margin-t-5"> Chris Daley </span>
              <span className="medium small grey-50"> Design lead at Mnet Mobile </span>
              <blockquote>
                <p>“John is a talented front end user interface designer. He combines good design instincts with very solid skills in Adobe CS, an excellent understanding of design trends and a growing understanding of the communication and practical aspects of working in an agency.</p><p>During his internship John demonstrated his talent and thoughtful approach to good effect. We were able to trust John to execute conceptual and finished work for clients including <b>Microsoft</b>, <b>Coles</b>, <b>Kmart</b> and the <b>Australian Government</b>, amongst others. <br /> Most of the work was the design of mobile web advertisement banners and mobile websites.</p><p> John learned the methods and communication skills necessary to complete the work efficiently and effectively. He was able to handle the complexity, communication and deadlines with minimal assistance. He demonstrated a good open minded and consultative approach to design. John also contributed to larger user interface design projects. He demonstrated excellent decision making in layout and interaction design for these projects, including an application for <b>MyBudget</b>. <br /> John was also able to provide good creative ideas when pressed."</p>
              </blockquote>
            </div>
            <div className="column lg-column-50 sm-padding-r-6">
              <span className="block medium margin-t-5"> Daniel Brett </span>
              <span className="medium small grey-50">Business Development Director at Mywork Australia</span>
              <blockquote>
                <p>"John is a talented designer and a great person to work with both individually and as part of a larger team. Not only is he an amazing designer, but he also has excellent coding skills, a rare combination to find in any employee, let alone someone just starting their career. </p> <p> During his time at MyWork, I always found John to have a great eye for detail, particularly with typography. A fun person to work with, and <b> an absolute gun at Mario Kart, </b> John is a passionate designer who always seems to have great awareness of new creative techniques and technology. I’d highly recommend John for any type of design role as he would make a fantastic asset to any company."</p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

