import {Component} from 'react'
import SlidesContext from '../../context/slidesContext'
import './index.css'

class Slide extends Component {
  state = {isHeadingActive: true, isDescriptionActive: true}

  onClickHeading = () => {
    this.setState({isHeadingActive: false})
  }

  onClickDescription = () => {
    this.setState({isDescriptionActive: false})
  }

  render() {
    const {isHeadingActive, isDescriptionActive} = this.state
    return (
      <SlidesContext.Consumer>
        {value => {
          const {
            initialList,
            activeIndex,
            changeHeading,
            changeDescription,
          } = value

          const onBlurHeading = event => {
            if (event.target.value === '') {
              changeHeading('Heading')
            }
            this.setState({isHeadingActive: true})
          }

          const onChangeHeading = event => {
            changeHeading(event.target.value)
          }

          const onChangeDescription = event => {
            changeDescription(event.target.value)
          }

          const onBlurDescription = event => {
            if (event.target.value === '') {
              changeDescription('Description')
            }
            this.setState({isDescriptionActive: true})
          }

          const tabDetails = initialList[activeIndex]
          const {heading, description} = tabDetails
          return (
            <div className="slide-view-container">
              <div className="slide-container">
                {isHeadingActive ? (
                  <h1 className="slide-heading" onClick={this.onClickHeading}>
                    {heading}
                  </h1>
                ) : (
                  <input
                    type="text"
                    value={heading}
                    onChange={onChangeHeading}
                    onBlur={onBlurHeading}
                    className="slide-heading-input"
                  />
                )}
                {isDescriptionActive ? (
                  <p
                    className="slide-description"
                    onClick={this.onClickDescription}
                  >
                    {description}
                  </p>
                ) : (
                  <input
                    className="slide-description-input"
                    type="text"
                    onChange={onChangeDescription}
                    onBlur={onBlurDescription}
                    value={description}
                  />
                )}
              </div>
            </div>
          )
        }}
      </SlidesContext.Consumer>
    )
  }
}
export default Slide
