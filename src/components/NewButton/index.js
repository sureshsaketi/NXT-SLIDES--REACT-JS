import {v4 as uuid} from 'uuid'
import SlidesContext from '../../context/slidesContext'
import {Button, ButtonImage} from './styledComponents'

const NewButton = () => (
  <SlidesContext.Consumer>
    {value => {
      const {addNewItem, changeActiveTabId, activeIndex} = value
      const onClickAddButton = () => {
        const id = uuid()
        const item = {
          id,
          heading: 'Heading',
          description: 'Description',
        }
        addNewItem(item)
        changeActiveTabId(activeIndex)
      }

      return (
        <Button onClick={onClickAddButton}>
          <ButtonImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
            alt="new plus icon"
          />
          New
        </Button>
      )
    }}
  </SlidesContext.Consumer>
)

export default NewButton
