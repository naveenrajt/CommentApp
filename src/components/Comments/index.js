import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentList: [],
    name: '',
    comment: '',
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const backgroundColor = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.floor(Math.random() * initialContainerBackgroundClassNames.length)
      ]
    }`
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      backgroundColor,
      date: new Date(),
      isFavorite: false,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isFavorite: !eachComment.isFavorite}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    const {commentList} = this.state
    const updatedCommentList = commentList.filter(comment => comment.id !== id)
    this.setState({commentList: updatedCommentList})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentList, name, comment} = this.state
    return (
      <div>
        <div className="bg-container">
          <div className="text-container">
            <h1 className="title">Comments</h1>
            <p className="paragraph">Say something about 4.0 technology</p>
            <form className="form" onSubmit={this.onAddComment}>
              <input
                type="search"
                value={name}
                onChange={this.onChangeName}
                className="search"
                placeholder="Your Name"
              />
              <textarea
                rows="8"
                cols="20"
                value={comment}
                onChange={this.onChangeComment}
                className="area"
                placeholder="Your Comment"
              />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image"
            />
          </div>
        </div>
        <hr className="horizon" />
        <div className="comment-list">
          <span className="count">{commentList.length}</span>
          <p>Comments</p>
        </div>
        <ul className="unorder">
          {commentList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentDetails={eachComment}
              toggleIsFavorite={this.toggleIsFavorite}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
