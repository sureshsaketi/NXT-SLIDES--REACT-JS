import React from 'react'

const SlidesContext = React.createContext({
  initialList: [],
  activeIndex: 0,
  changeActiveTabId: () => {},
  addNewItems: () => {},
  changeHeading: () => {},
  changeDescription: () => {},
})

export default SlidesContext
