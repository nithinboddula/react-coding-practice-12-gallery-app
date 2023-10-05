import './index.css'

const ThumbnailItem = props => {
  const {thumbnail, onClickImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnail

  const clickedImage = () => {
    onClickImage(id)
  }

  const activeThumbnailStyle = isActive ? 'active-thumbnail' : ''

  return (
    <li className="list-item">
      <button type="button" onClick={clickedImage} className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-image ${activeThumbnailStyle}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
