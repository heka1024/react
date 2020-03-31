import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import { IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import Api from '../Api'
import './Comment.scss'

@inject(root => ({
  AuthStore: root.AuthStore,
  CommentStore: root.CommentStore
}))

@observer
class Comment extends Component {
  componentDidMount() {
    this.id = this.props.comment.id
  }

  handleClick = () => {
    Api.deleteComment(this.props.comment.id, this.props.AuthStore.token).then(
      res => {
        if (res.status === 202) {
          this.props.CommentStore.getComments(this.props.comment.res.id)
        }
      },
      err => console.log(err)
    )
  }
 
	render() {          
		const { comment, AuthStore } = this.props
		
		return(
			<div className = "comment">
				<span className = "comment_author"> { comment.author_name }</span>
        
        <IconButton className="comment_date_wrapper" onClick={AuthStore.logged_in && this.handleClick}>
          { (AuthStore.logged_in && AuthStore.username === comment.author_name) && <DeleteIcon /> }
          <span className = "comment_date"> { comment.created_at.slice(0, 10) } </span>
        </IconButton>

				<p className = "comment_text"> { comment.text } </p>
			</div>
		)
	}
}

export default Comment
