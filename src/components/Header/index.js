import './index.css'

// import {HeaderContainer, LogoImage, NextSlidesHeading} from './styledComponents'

const Header = () => (
  <div className="HeaderContainer">
    <img
      className="LogoImage"
      src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
      alt="nxt slides logo"
    />
    <h1 className="NextSlidesHeading">Nxt Slides</h1>
  </div>
)
export default Header
