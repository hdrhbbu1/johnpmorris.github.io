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
    const post = this.props.route.page.data
    const dateReadible = moment(post.date, "YYYY-MM-DD").format("LL")
    var postDetails;
    if (post.date || post.category) {
      postDetails = 
        <p className="small medium">
          {post.category}
          {post.category && post.date ? ' - ' : '' }
          {post.date ? dateReadible : ''}
        </p>
    }
    return (
      <div className="markdown">
          <div className="container">
            <DocumentTitle title={ `Johnm  - ${ post.title } - Designer, Thinker, Maker. ` || 'Johnm - Designer, Thinker, Maker.' }></DocumentTitle>
            <h1 className={`grey-95 ${ post.hideTitle ? 'hidden' : ''}`}>{post.title}</h1>
            {postDetails}
            <div className="padding-t-5" dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </div>
    )
  },
})
