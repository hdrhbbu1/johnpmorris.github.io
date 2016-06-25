import React from 'react'
import DocumentTitle from 'react-document-title'

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  render () {
    const post = this.props.route.page.data
    return (
      <div className="markdown">
          <div className="container">
            <DocumentTitle title={ `Johnm  - ${ post.title } - Designer, Thinker, Maker. ` || 'Johnm - Designer, Thinker, Maker.' }></DocumentTitle>
            <h1 className="grey-95">{post.title}</h1>
            <p className="padding-b-5 small grey-50 medium">
              {post.category}
              {post.category && post.date ? ' - ' : '' }
              {post.date}
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </div>
    )
  },
})
