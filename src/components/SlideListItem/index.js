import './index.css'
import SlidesContext from '../../context/slidesContext'

const SlideListItem = props => {
  const {slideDetails, serialNumber} = props
  const {heading, description} = slideDetails

  return (
    <SlidesContext.Consumer>
      {value => {
        const {changeActiveTabId} = value

        const onClickSlideTab = () => {
          changeActiveTabId(serialNumber - 1)
          console.log(serialNumber - 1)
        }

        return (
          <li
            className="slide-list-item"
            onClick={onClickSlideTab}
            testid={`slideTab${serialNumber}`}
          >
            <p className="slide-card-number">{serialNumber}</p>
            <div className="slide-card">
              <h1 className="slide-card-heading">{heading}</h1>
              <p className="slide-card-text">{description}</p>
            </div>
          </li>
        )
      }}
    </SlidesContext.Consumer>
  )
}

export default SlideListItem
