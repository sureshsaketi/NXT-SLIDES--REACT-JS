import {Component} from 'react'

import SlideListItem from '../SlideListItem'
import Slide from '../Slide'
import SlidesContext from '../../context/slidesContext'
import './index.css'

class Slides extends Component {
  render() {
    // console.log(initialList)
    return (
      <SlidesContext.Consumer>
        {value => {
          const {initialList} = value
          return (
            <div className="slides-container">
              <ol className="slides-list-container">
                {initialList.map((eachSlide, index) => (
                  <SlideListItem
                    key={eachSlide.id}
                    slideDetails={eachSlide}
                    serialNumber={index + 1}
                  />
                ))}
              </ol>
              <Slide />
            </div>
          )
        }}
      </SlidesContext.Consumer>
    )
  }
}
export default Slides
