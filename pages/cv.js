import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import '../css/main.scss'

export default class Sass extends React.Component {
  render () {
    return (
      <div>
        <DocumentTitle title={ 'Johnm - Curriculum Vitae - Designer, Thinker, Maker.' }></DocumentTitle>
        <div className="container wide-container grey-95 padding-b-5 sm-padding-b-20">
          <h1 className="margin-b-8"> Cirriculum Vitae </h1>
          <div className="row sm-row">
            <div className="column sm-column-50 lg-column-33 sm-padding-r-6">
              <p className="medium">Experience</p>
              <p className="grey-95">
                <span className="block margin-t-5">Design lead / Front end</span>
                <span className="medium small grey-50">Outfit - 2015 - current</span>

                <span className="block margin-t-4">UI designer / Front end</span>
                <span className="medium small grey-50">NetEngine - 2015 - current</span>

                <span className="block margin-t-4">Web design / Front end</span>
                <span className="medium small grey-50">Mywork - 2014</span>

                <span className="block margin-t-4">UX design intern</span>
                <span className="medium small grey-50">MNET Mobile - 2014</span>

                <span className="block margin-t-4">Camera operator</span>
                <span className="medium small grey-50">M3 Media - 2013</span>

                <span className="block margin-t-4">Image manipulation</span>
                <span className="medium small grey-50">Brisbane Lions AFL Club - 2013</span>
              </p>
            </div>
            <div className="column sm-column-50 lg-column-33 sm-padding-r-6">
              <p className="medium">Education</p>
              <p className="grey-95">
                <span className="block margin-t-5">Diploma of Graphic Design</span>
                <span className="medium small grey-50">2012 - 2014</span>

                <span className="block margin-t-4">Certificate IV in IT</span>
                <span className="medium small grey-50">2011 - 2013</span>
              </p>
            </div>
            <div className="column padding-t-10 lg-padding-t-0">
              <p className="medium">Strengths</p>
              <ul className="no-list-style">
                <li className="margin-b-1 padding-t-2">Design Thinking</li>
                <li className="margin-b-1">CSS - sass, less, stylus</li>
                <li className="margin-b-1">Sketch</li>
                <li className="margin-b-1">HTML - haml, jade, slim</li>
                <li className="margin-b-1">Wireframing</li>
                <li className="margin-b-1">Adobe CC</li>
                <li className="margin-b-1">Video Production</li>
                <li className="margin-b-1">Working in a team</li>
              </ul>
            </div>
          </div>
          <div className="row sm-row padding-t-10">
            <div className="column lg-column-50 sm-padding-r-6">
              <span className="block medium margin-t-5"> Chris Daley </span>
              <span className="medium small grey-50"> Design lead at Mnet Mobile </span>
              <blockquote>
                “John is a talented front end user interface designer. He combines good design instincts with very solid skills in Adobe CS, an excellent understanding of design trends and a growing understanding of the communication and practical aspects of working in an agency. During his internship John demonstrated his talent and thoughtful approach to good effect. We were able to trust John to execute conceptual and finished work for clients including Microsoft, Coles, Kmart and the Australian Government, amongst others. Most of the work was the design of mobile web advertisement banners and mobile websites. John learned the methods and communication skills necessary to complete the work efficiently and effectively. He was able to handle the complexity, communication and deadlines with minimal assistance. He demonstrated a good open minded and consultative approach to design. John also contributed to larger user interface design projects. He demonstrated excellent decision making in layout and interaction design for these projects, including an application for MyBudget. John was also able to provide good creative ideas when pressed."
              </blockquote>
            </div>
            <div className="column lg-column-50 sm-padding-r-6">
              <span className="block medium margin-t-5"> Daniel Brett </span>
              <span className="medium small grey-50">Business Development Director at Mywork Australia</span>
              <blockquote>
                "John is a talented designer and a great person to work with both individually and as part of a larger team. Not only is he an amazing designer, but he also has excellent coding skills, a rare combination to find in any employee, let alone someone just starting their career. During his time at MyWork, I always found John to have a great eye for detail, particularly with typography. A fun person to work with, and an absolute gun at Mario Kart, John is a passionate designer who always seems to have great awareness of new creative techniques and technology. I’d highly recommend John for any type of design role as he would make a fantastic asset to any company."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

