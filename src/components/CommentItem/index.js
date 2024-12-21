// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsFavorite, deleteComment} = props
  const {name, comment, backgroundColor, isFavorite, id, date} = commentDetails

  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const textChange = isFavorite ? (
    <p className="text-color">Like</p>
  ) : (
    <p className="list-paragraph">Like</p>
  )

  const onClickFavoriteIcon = () => {
    toggleIsFavorite(id)
  }

  return (
    <li>
      <div className="container">
        <div className={backgroundColor}>
          <span>{name.charAt(0).toUpperCase()}</span>
        </div>
        <div className="text-contain">
          <h1>{name}</h1>
          <p>{comment}</p>
        </div>
        <p className="date-paragraph">
          {formatDistanceToNow(new Date(date))} ago
        </p>
      </div>
      <div className="thumb-container">
        <img src={starImgUrl} alt="like" className="thumb-image" />
        <div className="like-text-container">
          <button
            type="button"
            onClick={onClickFavoriteIcon}
            className="text-button"
          >
            <p className="text-para">{textChange}</p>
          </button>
          <button
            type="button"
            onClick={() => deleteComment(id)}
            className="delete-button"
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="delete-image"
            />
          </button>
        </div>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
