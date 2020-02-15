import React, { Component } from 'react';
import trash from '../static/Comment/trash.png'
import './Comment.scss';

class Comment extends Component {
	render() {
		const trash_box = <img src={trash} className="comment_trash" alt="trash"/>
		const { comment, user } = this.props
		
		return(
			<div className = "comment">
				<span className = "comment_author"> { comment.author }</span>
				<span className="comment_date_wrapper">
					{ user.username == comment.author && trash_box }
					<span className = "comment_date"> { comment.date } </span>
				</span>
				<p className = "comment_text"> { comment.text } </p>
			</div>
		)
	}
}

export default Comment;
