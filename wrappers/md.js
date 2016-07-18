import React from 'react'
import DocumentTitle from 'react-document-title'
import moment from 'moment'

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  render () {
    const post         = this.props.route.page.data,
          dateReadible = moment(post.date).format("MMM Do YY")

    return (
      <div className="markdown">
          <div className="container">
            <DocumentTitle title={ `Johnm  - ${ post.title } - Designer, Thinker, Maker. ` || 'Johnm - Designer, Thinker, Maker.' }></DocumentTitle>
            <h1 className={`grey-95 ${ post.hideTitle ? 'hidden' : ''}`}>{post.title}</h1>
            <p className="padding-b-5 small medium">
              {post.category}
              {post.category && post.date ? ' - ' : '' }
              {dateReadible}
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </div>
    )
  },
})
